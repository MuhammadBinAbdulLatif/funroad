import {create} from 'zustand'
import {createJSONStorage, persist} from 'zustand/middleware'

interface TenantCart {
    productIds: string[]
}
interface CartState { 
    tenantCarts: Record<string, TenantCart>,
    addProduct: (tenantSlug: string, productId: string) => void;
    removeProduct: (tenantSlug: string, productId: string) => void;
    clearCart: (tenantSlug: string) => void;
    clearAllCarts: () => void;
    getCartByTenant: (tenantSlug: string) => string[]
}

// Create a safe storage implementation
const createSafeStorage = () => {
    try {
        // Check if localStorage is available
        if (typeof window !== 'undefined' && window.localStorage) {
            return localStorage
        }
    } catch {
        console.warn('localStorage is not available, using memory storage')
    }
    
    // Fallback to memory storage
    const memoryStorage = {
        getItem: () => null,
        setItem: () => {},
        removeItem: () => {},
    }
    return memoryStorage
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            tenantCarts: {},
            addProduct: (tenantSlug, productId) => 
                set((state)=> ({
                    tenantCarts: {
                        ...state.tenantCarts,
                        [tenantSlug]: {
                            productIds: [
                                ...(state.tenantCarts[tenantSlug]?.productIds || []),
                                productId
                            ]
                        }
                    }
                })),
            removeProduct: (tenantSlug, productId) => 
                set((state)=> ({
                    tenantCarts: {
                        ...state.tenantCarts,
                        [tenantSlug]: {
                            productIds: (state.tenantCarts[tenantSlug]?.productIds || [])
                                 .filter(id => id !== productId)
                        }
                    }
                })),
            clearCart: (tenantSlug) => 
                set((state)=> ({
                    tenantCarts: {
                        ...state.tenantCarts,
                        [tenantSlug]: {
                            productIds: []
                        }
                    }
                })),
            clearAllCarts: () => 
                set({tenantCarts: {}}),
            getCartByTenant: (tenantSlug) => 
                get().tenantCarts[tenantSlug]?.productIds || [],
        }),
        {
            name: 'funroad-cart',
            storage: createJSONStorage(() => createSafeStorage()),
            skipHydration: false,
            version: 1,
            onRehydrateStorage: () => (state) => {
                console.log('hydration finished', state)
            },
            partialize: (state) => ({ tenantCarts: state.tenantCarts })
        }
    )
)


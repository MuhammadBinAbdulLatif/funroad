import { useCartStore } from "@/store/use-cart-store";
export const useCart = (tenantSlug: string) => {
    const { addProduct,clearAllCarts,clearCart,getCartByTenant,removeProduct} = useCartStore()
    const productIds = getCartByTenant(tenantSlug)
    const toggleProduct = (productId:string ) => {
        if(productIds.includes(productId)) {
            removeProduct(tenantSlug, productId)
        } else {
            addProduct(tenantSlug, productId);
        }
    }
    const clearTenantCart = () => {
        clearCart(tenantSlug)
    }
    const isProductInCart = (productId: string) => {
        return productIds.includes(productId)
    }
    return {
        productIds, addProduct: (productId: string) => addProduct(tenantSlug, productId),
        removeProduct: (productId: string) => removeProduct(tenantSlug, productId),
        clearCart: clearTenantCart,
        clearAllCarts,
        toggleProduct,
        isProductInCart,
        totalItems: productIds.length
    }
}
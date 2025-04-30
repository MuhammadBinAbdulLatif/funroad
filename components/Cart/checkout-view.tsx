'use client'

import { useCart } from "@/hooks/use-cart";
import { generateTenantUrl } from "@/lib/utils";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import {toast} from 'sonner'
import CheckoutItem from "./checkout-item";
import { InboxIcon, Loader2 } from "lucide-react";
import CheckoutSidebar from "./checkout-sidebar";
import { useCheckoutStates } from "@/hooks/use-checkout-states";
import { useRouter } from "next/navigation";
type Props = {
    tenantSlug: string;
}

const CheckoutView = ({tenantSlug}: Props) => {
    const {productIds,removeProduct, clearCart} = useCart(tenantSlug)
    const router = useRouter()
    const [states, setStates] = useCheckoutStates()

    const trpc = useTRPC();
    const {data, error, isLoading} = useQuery(trpc.checkout.getProducts.queryOptions({ids:productIds}))
    const purchase = useMutation(trpc.checkout.purchase.mutationOptions({
        onSuccess: (data) => {
            window.location.href = data.url
        },
        onError: (error) => {
            if(error.data?.code === 'UNAUTHORIZED') {
                router.push('/sign-in')
            }
            toast.error(error?.message)
        },
        onMutate: ()=> {
            setStates({cancel: false, success: false})
        }
    }))
    useEffect(()=> {
        if(!error) return;
        if(error.data?.code === 'NOT_FOUND' ) {
            clearCart()
            toast.warning('Invalid Products found, cart cleared')
        }
    }, [error, clearCart])
    useEffect(()=> {
        if(states.success) {
            setStates({cancel: false, success: false})
            clearCart()
            router.push('/library')
        }
        
    }, [states.success, router, clearCart, setStates])
    if(isLoading){
        return <div className="flex min-h-[600px] items-center justify-center">
            <Loader2 className="animate-spin size-12" />
        </div>
    }
    if(!data || data?.docs.length===0) {
        return (
            <div className='border my-10 border-black border-dashed flex items-center justify-center p-5 flex-col gap-y-4 bg-white w-full rounded-lg'>
                <InboxIcon />
                <p className='text-base font-medium'>
                    No product found
                </p>
            </div>
        )
    }
  return (
    <div className="lg:pt-16 pt-4 px-4 lg:px-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 lg:gap-16">
            <div className="lg:col-span-4">
                <div className="border rounded-md overflow-hidden bg-white">
                    {data?.docs.map((product,index)=> (
                        <CheckoutItem tenantName={product.tenant.name} key={product.id} id={product.id} isLast={index === data.docs.length - 1} imageUrl={product.image?.url} name={product.name}
                          productUrl={`${generateTenantUrl(product.tenant.slug)}/products/${product.id}`}
                          tenantUrl={generateTenantUrl(product.tenant.slug)}
                          price={product.price}
                          onRemove={()=> removeProduct(product.id)}
                          />
                    ))}
                </div>
            </div>
            <div className="lg:col-span-3">
                
               <CheckoutSidebar total={data?.totalPrice || 0} onPurchase={()=> purchase.mutate({tenantSlug, productIds: productIds})} isCanceled={states.cancel} isPending={purchase.isPending} />
            </div>

        </div>
    </div>
  )
}

export default CheckoutView
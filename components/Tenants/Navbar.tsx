'use client'

import { generateTenantUrl } from "@/lib/utils"
import { useTRPC } from "@/trpc/client"
import { useSuspenseQuery } from "@tanstack/react-query"
import Image from "next/image"
import Link from "next/link"
import { Loader2 } from "lucide-react"
import dynamic from "next/dynamic"
type Props = {
    slug: string
}
const Navbar = ({slug}:Props) => {
    const trpc = useTRPC()
    const {data} = useSuspenseQuery(trpc.tenants.getOne.queryOptions({
        slug
    }))
    const CheckoutButton = dynamic(
        () => import('../Cart/checkout-button').then((mod)=> mod.CheckoutButton,), {
            ssr: false,
            loading: () => <Loader2 className='animate-spin ml-auto size-4' />
        }
    )
  return (
    <nav className="h-20 border-b font-medium bg-white">
        <div className="max-w-(--breakpoint-xl) mx-auto flex justify-between items-center h-full px-4 lg:px-12">
            <Link className="flex items-center gap-2 " href={generateTenantUrl(slug)} >
            {data?.image?.url && (
                <Image src={data.image.url} width={32} height={32} className="rounded-full border shrink-0 size-[32px] " alt={slug} />
            )}
            <p className="text-xl">
                {data.name}
            </p>
            </Link>
            <CheckoutButton tenantSlug={slug} />
        </div>
    </nav>
  )
}

export default Navbar


export const NavbarSkeleton = ()=> {
    return (
        <nav className="h-20 border-b font-medium bg-white">
        <div className="max-w-(--breakpoint-xl) mx-auto flex justify-between items-center h-full px-4 lg:px-12">

        </div>
    </nav>

    )
}

import Link from "next/link"
import { Button } from "../ui/button"
import { generateTenantUrl } from "@/lib/utils"
type Props = {
    slug: string
}
const CheckoutNavbar = ({slug}:Props) => {
  return (
    <nav className="h-20 border-b font-medium bg-white">
        <div className="max-w-(--breakpoint-xl) mx-auto flex justify-between items-center h-full px-4 lg:px-12">
            <p className="text-xl">
                Checkout
            </p>
            <Button variant={'elevated'} asChild>
                <Link href={`${generateTenantUrl(slug)}`}>
                Continue shopping
                </Link>
            </Button>
        </div>
    </nav>
  )
}

export default CheckoutNavbar


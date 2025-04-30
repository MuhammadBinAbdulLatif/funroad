import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
type Props = {
    isLast?: boolean;
    imageUrl?: string | null;
    name: string;
    productUrl: string;
    tenantUrl: string;
    tenantName: string;
    id: string;
    price: number;
    onRemove: () => void
}

const CheckoutItem = ({name,onRemove,price,productUrl,tenantName,tenantUrl,imageUrl,isLast}: Props) => {
  return (
    <div className={cn('grid grid-cols-[8.5rem_1fr_auto] gap-4 pr-4 border-b', isLast && 'border-b-0' )}>
        <div className="overflow-hidden border-r">
            <div className="relative aspect-square h-full">
                <Image src={imageUrl || '/auth-background.png'} fill alt={name} />
            </div>
        </div>

        <div className="py-4 flex flex-col justify-between ">
            <div>
                <Link href={productUrl}>
                <h4 className="font-bold underline">
                    {name}
                </h4>
                </Link>
                <Link href={tenantUrl}>
                <p className="font-medium underline">
                    {tenantName}
                </p>
                </Link>
            </div>

        </div>
        <div className="py-4 flex flex-col justify-between">
            <p className="font-medium">
                    {new Intl.NumberFormat('en-Us', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(price)}
            </p>
            <button className="underline font-medium cursor-pointer" onClick={onRemove}>
                Remove
            </button>
        </div>

    </div>
  )
}

export default CheckoutItem
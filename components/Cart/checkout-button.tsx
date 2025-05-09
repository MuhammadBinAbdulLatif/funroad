import { useCart } from "@/hooks/use-cart";
import { Button } from "../ui/button";
import { cn, generateTenantUrl } from "@/lib/utils";
import Link from "next/link";
import { ShoppingCartIcon } from "lucide-react";

interface CheckoutButtonProps {
    className?: string;
    hideIfEmpty?: boolean;
    tenantSlug: string;
}

export const CheckoutButton = ({tenantSlug,className,hideIfEmpty}: CheckoutButtonProps) => {
    const {totalItems } = useCart(tenantSlug);
    if(hideIfEmpty && totalItems === 0) return null;
    return (
        <Button variant={'elevated'} asChild className={cn('bg-white', className)}>
            <Link href={`${generateTenantUrl(tenantSlug)}/checkout`}>
            <ShoppingCartIcon className="size-4" /> {totalItems > 0 ? totalItems: ''}
            </Link>
        </Button>
    )

}
"use client";

//TODO: add real ratings
import { generateTenantUrl } from "@/lib/utils";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import StarRating from "./StarRating";
import { Button } from "../ui/button";
import { LinkIcon, Loader2, StarIcon } from "lucide-react";
import { Progress } from "../ui/progress";
import dynamic from "next/dynamic";
import { toast } from "sonner";
import { RichText} from '@payloadcms/richtext-lexical/react'
const CartButton = dynamic(
  () => import("../Cart/cart-button").then((mod) => mod.CartButton),
  {
    ssr: false,
    loading: () => <Loader2 className="animate-spin mx-auto size-4" />,
  }
);
type Props = {
  productId: string;
  tenantSlug: string;
};

const ProductView = ({ productId, tenantSlug }: Props) => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.products.getOne.queryOptions({
      id: productId,
    })
  );
  const [isCopied, setIsCopied] = useState(false)
  return (
    <div className="px-4 lg:px-12 py-10">
      <div className="border rounded-md bg-white overflow-hidden">
        <div className="relative aspect-[3.9] border-b">
          <Image
            src={data.cover?.url || data?.image?.url || "/auth-background.png"}
            alt={data.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-6 ">
          <div className="col-span-1 lg:col-span-4">
            <div className="p-6">
              <p className="text-4xl font-medium"> {data.name}</p>
            </div>
            <div className="border-y flex">
              <div className="px-6 py-4 flex items-center justify-center border-r">
                <div className=" px-2 py-1 border bg-pink-400 w-fit">
                  <p className="text-base font-medium">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      maximumFractionDigits: 0,
                    }).format(Number(data.price))}
                  </p>
                </div>
              </div>
              <div className="px-6 py-4 flex items-center justify-center lg:border-r ">
                <Link
                  href={generateTenantUrl(tenantSlug)}
                  className="flex items-center gap-2 "
                >
                  {data.tenant.image?.url && (
                    <Image
                      src={data.tenant.image.url}
                      alt={data.tenant.name}
                      className="rounded-full border shrink-0 size-[20px]"
                      width={20}
                      height={20}
                    />
                  )}
                  <p className="text-base font-medium underline">
                    {data.tenant.name}
                  </p>
                </Link>
              </div>
              <div className="hidden lg:flex px-6 py-4 items-center justify-center">
                <div className="flex items-center gap-1">
                  <StarRating rating={data.reviewRating} iconClassName="size-5 " />
                  <p className="text-base font-medium">{data.reviewCount} rating {data.reviewCount ===1 ? '': 's'}</p>
                </div>
              </div>
            </div>
            <div className="block lg:hidden px-6 py-4 items-center justify-center border-b">
              <div className="flex items-center gap-1">
                <StarRating rating={data.reviewRating} iconClassName="size-4" />
                
              </div>
            </div>
            <div className="p-6">
              {data.description ? (
                <RichText data={data.description} />
              ) : (
                <p className="font-medium text-muted-foreground italic">
                  No description provided
                </p>
              )}
            </div>
          </div>
          <div className="col-span-2">
            <div className="border-t lg:border-t-0 lg:border-l h-full">
              <div className="flex flex-col gap-4 p-6 border-b">
                <div className="flex flex-row items-center gap-2">
                  {data.isPurchased ? (
                    <Button
                      variant={"elevated"}
                      asChild
                      className="flex-1 font-medium bg-white"
                    >
                      <Link prefetch href={`/library/${data.id}`}>
                        View in Library
                      </Link>
                    </Button>
                  ) : (
                    <CartButton tenantSlug={tenantSlug} productId={productId} />
                  )}
                  <Button
                    className="size-12"
                    variant={"elevated"}
                    onClick={() => {
                      setIsCopied(true)
                      navigator.clipboard.writeText(window.location.href)
                      toast.success('URL Copied to Clipboard')
                      setTimeout(()=> setIsCopied(false) , 1000)
                    }}
                    disabled={isCopied}
                  >
                    <LinkIcon />
                  </Button>
                </div>
                <p className="text-center font-medium">
                  {data.refundPolicy === "no-refunds"
                    ? "No refunds"
                    : `${data.refundPolicy} money back guarantee `}
                </p>
              </div>
              <div className="p-6 ">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium">Ratings</h3>
                  <div className="flex items-center gap-x-1 font-medium">
                    <StarIcon className="size-4 fill-black" />
                    <p>({data.reviewRating})</p>
                    <p className="text-base">{data.reviewCount} ratings</p>
                  </div>
                </div>
                <div className="grid grid-cols-[auto_1fr_auto] gap-3 mt-4">
                  {[5, 4, 3, 2, 1].map((stars) => (
                    <Fragment key={stars}>
                      <div className="font-medium">
                        {stars} {stars === 1 ? "star" : "stars"}
                      </div>
                      <Progress value={data.ratingDistribution[stars]} className="h-[1lh]" />
                      <div className="font-medium">{data.ratingDistribution[stars]}%</div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;

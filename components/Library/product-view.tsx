'use client'
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import ReviewSidebar from "./review-sidebar";
import { RichText } from "@payloadcms/richtext-lexical/react";
interface Props {
    productId: string
}
function ProductView({productId}:Props) {
    const trpc = useTRPC()
    const {data} = useSuspenseQuery(trpc.library.getOne.queryOptions({
        productId
    }))
  return (
    <div className="min-h-screen bg-white ">
      <nav className="p-4 bg-[#f4f4f0] w-full border-b">
        <Link prefetch href={"/library"} className="flex items-center gap-2">
        <ArrowLeftIcon className="size-4" />
        <span className="text-lg font-medium">
            Back to library
        </span>
        </Link>
      </nav>
      <header className="bg-[#f4f4f0] py-8 border-b">
        <div className="max-w-(--breakpoint-xl) mx-auto px-4 lg:px-12 ">
            <h1 className="text-[40px] font-medium">
                {data.name}
            </h1>
        </div>
       
      </header>
      <section className="max-2-(--breakpoint-xl) mx-auto px-4 lg:px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 lg:gap-16">
            <div className="lg:col-span-2">
                <ReviewSidebar productId={productId} />
            </div>
            <div className="lg:col-span-5">
              {data.content ? <RichText data={data.content} />: <p className="font-medium italic text-muted-foreground">
                    No special content
                </p> }
                
            </div>

        </div>
        </section>
    </div>
  );
}

export default ProductView;

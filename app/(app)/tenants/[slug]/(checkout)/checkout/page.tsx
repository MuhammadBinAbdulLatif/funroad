import CheckoutView from "@/components/Cart/checkout-view";

interface PageProps {
  params: Promise<{slug: string}>;
}
async function page({params}:PageProps) {
  const {slug} = await params;
  return (
    <CheckoutView tenantSlug={slug} />
  )
}

export default page

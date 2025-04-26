import SearchFilter from '@/components/search-filter.tsx';
import { Category } from '@/payload-types';
import configPromise from '@payload-config'
import { getPayload } from 'payload';
export default async function Home() {
   const payload = await getPayload({
    config:configPromise,
   })
   const data = await payload.find({
    collection: 'categories',
    depth: 1,
    pagination: false,
    where: {
      parent: {
        exists: false,
      }
    }
   })
   const formattedData = data.docs.map((doc)=> (
    {
      ...doc,
      subcategories: (doc.subcategories?.docs ?? []).map((doc)=> ({
        ...(doc as Category),
        subcategories: undefined
      }))
    }
   ))
  return (
    <div className='flex flex-col'>
      <div className='w-screen'>
      <SearchFilter data={formattedData} />
      </div>
     
    </div>
  );
}

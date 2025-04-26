'use client'
import { modifiedCategory } from '@/types/CustomCategory';
import { Sheet, SheetHeader, SheetContent,SheetTitle  } from '../ui/sheet';
import { useState } from 'react';
import { ScrollArea } from '../ui/scroll-area';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {  useRouter } from 'next/navigation';
type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    data: modifiedCategory[]
}

const CategoriesSidebar = ({onOpenChange,open,data}: Props) => {
    const [parentCategories, setParentCategories] = useState<modifiedCategory[] | null>(null)
    const [selectedCategory, setselectedCategory] = useState<modifiedCategory | null>(null)
    const currentCategory =  parentCategories ?? data ?? []
    const router = useRouter()
    const handleOpenChange = (open: boolean) => {
        setselectedCategory(null)
        setParentCategories(null)
        onOpenChange(open)

    }
    const backgroundColor = selectedCategory?.color || '#f5f5f5'
    const handleCategoryClick = (category: modifiedCategory) => () => {
        if(category.subcategories && category.subcategories.length > 0) {
            setParentCategories(category.subcategories as modifiedCategory[])
            setselectedCategory(category)  
        } else {
            if(parentCategories && selectedCategory) {
                router.push(`/${selectedCategory.slug}/${category.slug}`)
            } else {
                if(category.slug === 'all') {
                    router.push('/')
                } else {
                    router.push(`/${category.slug}`)
                }
            }
            handleOpenChange(false)
        }
    }
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent side='left' className='p-0 transition-none' style={{backgroundColor: backgroundColor}}>
            <SheetHeader className='p-4 border-b'>
            <SheetTitle>
                Categories
            </SheetTitle>
            </SheetHeader>
            <ScrollArea>
                {parentCategories && (
                    <button
                        onClick={() => {
                            setParentCategories(null);
                            setselectedCategory(null);
                        }}
                        className='w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium'
                    >
                        <ChevronLeft className='size-4 mr-2' />
                        Back
                    </button>
                )}
                {currentCategory?.map((category) => (
                    <button key={category.slug} onClick={ handleCategoryClick(category)} className='w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base justify-between font-medium'>
                        {category.name} 
                        {category.subcategories  && category.subcategories.length > 0 && (
                            <ChevronRight className='size-4' />
                        )}
                    </button>
                ))}
            </ScrollArea>
        </SheetContent>
    </Sheet>
  )
}

export default CategoriesSidebar
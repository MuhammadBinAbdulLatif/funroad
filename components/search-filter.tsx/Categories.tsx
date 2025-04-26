'use client'
import React, { useEffect, useRef, useState } from 'react'
import CategoryDropDown from './category-dropdown'
import { modifiedCategory } from '@/types/CustomCategory'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { ListFilterIcon } from 'lucide-react'
import CategoriesSidebar from './categories-sidebar'


type Props = {
    data: modifiedCategory[]
}

const Categories = ({data}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const measureRef = useRef<HTMLDivElement>(null)
  const ViewAllRef = useRef<HTMLDivElement>(null)
  const [visibleContent, setVisibleContent] =  useState(data.length)
  const [isAnyHovered, setIsAnyHovered] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const activeCategory = 'all'
  const activeCategoryIndex = data.findIndex((category) => category.slug === activeCategory)
  const isActiveCategoryHidden = activeCategoryIndex >= visibleContent && activeCategoryIndex !== -1
  useEffect(() => {
    const calculateVisible = () => {
      if (!containerRef.current || !measureRef.current || !ViewAllRef.current) {
        return;
      }
  
      const containerWidth = containerRef.current.offsetWidth;
      const viewAllWidth = ViewAllRef.current.offsetWidth;
      const availableWidth = containerWidth - viewAllWidth;
      const items = Array.from(measureRef.current.children);
      let totalWidth = 0;
      let visible = 0;
  
      for (const item of items) {
        const width = item.getBoundingClientRect().width;
        if (totalWidth + width > availableWidth) {
          break;
        }
        totalWidth += width;
        visible += 1;
      }
  
      setVisibleContent(visible);
    };
  
    const resizeObserver = new ResizeObserver(calculateVisible);
  
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
  
    // Small delay to allow DOM paint
    setTimeout(() => {
      calculateVisible();
    }, 0);
  
    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  
  

  return (
    <div className="relative w-full">
      {/* Hidden Measurement */}
      <CategoriesSidebar open={isSidebarOpen} onOpenChange={setIsSidebarOpen} data={data} />
      <div ref={measureRef} className="flex flex-nowrap invisible absolute h-auto overflow-hidden w-full">
        {data.map((category) => (
          <div key={category.id}>
            <CategoryDropDown category={category} isActive={false} isNavigationHovered={false} />
          </div>
        ))}
      </div>
      {/* Visible Categories */}
      <div
        ref={containerRef}
        className="flex flex-nowrap items-center "
        onMouseEnter={() => setIsAnyHovered(true)}
        onMouseLeave={() => setIsAnyHovered(false)}
      >
        {data.slice(0, visibleContent).map((category) => (
          <div key={category.id}>
            <CategoryDropDown
              category={category}
              isActive={activeCategory === category.slug}
              isNavigationHovered={isAnyHovered}
            />
          </div>
        ))}
        {/* View All button inside the flex row! */}
        <div ref={ViewAllRef} className="shrink-0">
          <Button
            variant={'elevated'}
            className={cn(
              'h-11 px-4 bg-transparent border-transparent rounded-full hover:bg-white hover:border-primary hover:text-black',
              isActiveCategoryHidden && !isAnyHovered && 'bg-white border-primary'
            )}
            onClick={() => setIsSidebarOpen(true)}
          >
            View All
            <ListFilterIcon className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Categories
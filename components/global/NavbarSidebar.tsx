import React from 'react'
interface NavbarItems {
    href: string;
    children: React.ReactNode;
}
type Props = {
    item: NavbarItems[];
    open:boolean;
    onOpenChange: (open: boolean) => void;
}

import { Sheet,SheetContent,SheetHeader,SheetTitle } from '../ui/sheet';
import { ScrollArea } from '../ui/scroll-area';
import Link from 'next/link';

const NavbarSidebar = ({ item,onOpenChange,open}: Props) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent side='left' className='p-0 transition-none'>
            <SheetHeader className='p-4 border-b'>
                <div className='flex items-center'>
                    <SheetTitle>
                        Menu 
                    </SheetTitle>
                </div>
            </SheetHeader>
            <ScrollArea>
                {item.map((item)=> (
                    <Link onClick={()=> onOpenChange(false)} href={item.href} key={item.href} className='w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium '>
                    {item.children}
                    </Link>
                ))}
                <div className='border-t'>
                    <Link href={'/sign-in'} onClick={()=> onOpenChange(false)} className='w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium '>
                    Log in
                    </Link>
                    <Link href={'/sign-up'} onClick={()=> onOpenChange(false)} className='w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium '>
                    Sign up
                    </Link>
                </div>
            </ScrollArea>
        </SheetContent>
    </Sheet>
  )
}

export default NavbarSidebar
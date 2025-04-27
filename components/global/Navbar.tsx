'use client'
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Button } from "../ui/button";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import NavbarSidebar from "./NavbarSidebar";
import { MenuIcon } from "lucide-react";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
});

type navbarItemProps = {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
};

const navbarItems = [
  {
    href: "/",
    children: "Home",
  },
  {
    href: "/about",
    children: "About",
  },
  {
    href: "/contact",
    children: "Contact",
  },
  {
    href: "/features",
    children: "Features",
  },
  {
    href: "/pricing",
    children: "Pricing",
  },
];

const NavbarItem = ({ children, href, isActive }: navbarItemProps) => {
  return (
    <Button
      asChild
      variant={"outline"}
      className={cn(
        "bg-transparent hover:bg-transparent rounded-full border-transparent hover:border-primary px-3.5 text-lg",
        isActive && "bg-black text-white hover:bg-black hover:text-white"
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const Navbar = () => {
    const pathname = usePathname()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const trpc = useTRPC()
    const session = useQuery(trpc.auth.session.queryOptions())
    

  return (
    <nav className="h-16 flex border-b justify-between font-medium bg-white">
      <NavbarSidebar open={isSidebarOpen} onOpenChange={setIsSidebarOpen} item={navbarItems} />
      <Link href={"/"} className="pl-4 flex items-center">
        <span className={cn("text-3xl font-semibold", poppins.className)}>
          funroad
        </span>
      </Link>
      <div className="items-center gap-3 hidden lg:flex pr-4">
        {navbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={pathname === item.href ? true : false}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>
      <div className="hidden lg:flex">
        {session.data?.user ? (
          <div className="hidden lg:flex">
             <Button asChild variant={'default'} className="border-l border-t-0 border-b-0 border-r-0 px-8 h-full bg-black  rounded-none text-white hover:text-black hover:bg-pink-400 transition-colors text-base">
          <Link href={'/admin'}>
          Dashboard  </Link>
        </Button>
          </div>
        ):(
          <div className="hidden lg:flex">
            <Button variant={'secondary'} className="border-l border-t-0 border-b-0 border-r-0 px-8 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-base">
            <Link href={'/sign-in'}>
            Log in</Link>
        </Button>
        <Button variant={'default'} className="border-l border-t-0 border-b-0 border-r-0 px-8 h-full bg-black  rounded-none text-white hover:text-black hover:bg-pink-400 transition-colors text-base">
          <Link href={'/sign-up'}>
          Start selling  </Link>
        </Button>
          </div>
        )}
        
      </div>
      <div className="flex lg:hidden items-center justify-center">
        <Button variant={'ghost'} className="size-12 border-transparent bg-white " onClick={()=> setIsSidebarOpen(true)}>
          <MenuIcon/>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

'use client'

import { LuAlignJustify } from "react-icons/lu";
import { Logo } from "../logo/Logo";
import { useSidebarStore } from "@/store/sidebarStore";

export const Navbar = () => {

  const toggle = useSidebarStore((state) => state.toggle);

  return (
    <header className="p-5 shadow bg-white">
      <nav className="flex items-center justify-around">
        <Logo />
        <LuAlignJustify size={30} onClick={toggle} className="cursor-pointer" />
      </nav>
    </header>
  );
};

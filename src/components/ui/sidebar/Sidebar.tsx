'use client';

import { useSidebarStore } from "@/store/sidebarStore";
import { IoClose } from "react-icons/io5";
import { Logo } from "../logo/Logo";
import MenuItems from "../menu-items/MenuItems";

export const Sidebar = () => {
  const { isOpen, toggle } = useSidebarStore();
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
      )}

      {isOpen && (
        <div
          onClick={toggle}
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
        />
      )}

      <nav
        className={`fixed p-5 right-0 top-0 xl:w-[500px] w-full h-screen bg-white z-20 shadow-2xl transform transition-all duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <IoClose
          onClick={toggle}
          size={30}
          className="absolute top-5 right-5 cursor-pointer"
        />

        <Logo />

        {/* Menú */}
        <MenuItems />
      </nav>
    </>
  );
};

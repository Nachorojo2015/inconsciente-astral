import { LuAlignJustify } from "react-icons/lu";
import { useSidebarStore } from "../../../store/sidebarStore";
import { Logo } from "../logo/Logo";

export const Navbar = () => {
  const toggle = useSidebarStore((state) => state.toggle);

  return (
    <header className="p-5 shadow bg-white">
      <nav className="flex items-center justify-around">
        <Logo />
        <LuAlignJustify size={30} onClick={toggle} className="cursor-pointer"/>
      </nav>
    </header>
  );
};

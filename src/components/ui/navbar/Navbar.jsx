import { LuAlignJustify } from "react-icons/lu";
import { useSidebarStore } from "../../../store/sidebarStore";
import { Logo } from "../logo/Logo";

export const Navbar = () => {
  const toggle = useSidebarStore((state) => state.toggle);

  return (
    <header className="p-5 shadow-md z-50 bg-white w-full">
      <nav className="flex items-center justify-around">
        <Logo />
        <button className="text-3xl" onClick={toggle}>
          <LuAlignJustify />
        </button>
      </nav>
    </header>
  );
};

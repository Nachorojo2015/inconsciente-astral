import { useSidebarStore } from "@/store/sidebarStore";
import Link from "next/link";

const menuItems = [
  { name: "Home", link: "/" },
  { name: "Sobre nosotros", link: "/sobre-nosotros" },
  { name: "Servicios", link: "/servicios" },
  { name: "Galería", link: "/galeria" },
  { name: "Contacto", link: "/contacto" },
];

export const MenuItems = () => {
  const toggle = useSidebarStore((state) => state.toggle);

  return (
    <div className="flex flex-col mt-5">
      {menuItems.map((item, index) => (
        <Link
          href={item.link}
          key={index}
          onClick={toggle}
          className="block p-2 hover:bg-gray-100"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default MenuItems;

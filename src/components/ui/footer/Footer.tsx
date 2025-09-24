import Link from "next/link";
import { Logo } from "../logo/Logo";
import { IoMdPhonePortrait } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { SocialMediaLinks } from "../social-media-links/SocialMediaLinks";

export const Footer = () => {
  return (
    <footer className="bg-[#17384E] px-12 pt-12 pb-5 mt-[100px]">
      <section className="flex xl:flex-row xl:items-center flex-col justify-center xl:gap-[150px] gap-12">
        <div>
          <p className="text-white border-b-[3px] rounded-b-md w-[140px] pb-2 text-xl font-[500]">
            Sobre Nosotros
          </p>
          <div className="mt-6">
            <Logo />
          </div>
          <p className="text-[#808181] w-[300px] mt-6">
            Somos una plataforma dedicada a explorar y compartir conocimientos
            sobre astrología.
          </p>
        </div>
        <div>
          <p className="text-white border-b-[3px] rounded-b-md w-[85px] pb-2 text-xl font-[500]">
            Información
          </p>
          <ul className="text-[#808181] mt-9">
            <Link
              href="/sobre-nosotros"
              className="block transition-all duration-300 hover:text-orange-500"
            >
              Sobre Nosotros
            </Link>
            <Link
              href="/servicios"
              className="block mt-3 transition-all duration-300 hover:text-orange-500"
            >
              Servicios
            </Link>
            <Link
              href="/galeria"
              className="block mt-3 transition-all duration-300 hover:text-orange-500"
            >
              Galería
            </Link>
          </ul>
        </div>
        <div>
          <p className="text-white border-b-[3px] rounded-b-md w-[85px] pb-2 text-xl font-[500]">
            Contacto
          </p>
          <div className="flex items-center gap-3 text-[#808181] mt-5">
            <IoMdPhonePortrait />
            <p>+11 2188-8493</p>
          </div>
          <div className="flex items-center gap-3 text-[#808181] mt-5">
            <IoMailOutline />
            <p>Inconscienteastral@gmail.com</p>
          </div>
          <SocialMediaLinks />
        </div>
      </section>
      <hr className="mt-12 border-[#808181]" />
      <p className="text-[#808181] text-center mt-5">
        Copyright © {new Date().getFullYear()} IASTRAL
      </p>
    </footer>
  );
};

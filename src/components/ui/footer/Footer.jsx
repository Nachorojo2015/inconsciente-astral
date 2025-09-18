import { IoLogoFacebook, IoLogoInstagram, IoLogoWhatsapp, IoMdPhonePortrait } from "react-icons/io";
import { IoLogoTiktok, IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Logo } from "../logo/Logo";

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
              to="/sobre-nosotros"
              className="block transition-all duration-300 hover:text-orange-500"
            >
              Sobre Nosotros
            </Link>
            <Link
              to="/blogs"
              className="block mt-3 transition-all duration-300 hover:text-orange-500"
            >
              Últimas Noticias
            </Link>
            <Link
              to="/galeria"
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
            <IoMail />
            <p>Inconscienteastral@gmail.com</p>
          </div>
          <div className="mt-5 flex gap-3">
            <Link
              to="https://www.facebook.com/inconscienteastral?mibextid=LQQJ4d"
              className="bg-[#303FBF] p-2 inline-block text-white rounded-md hvr-pulse-shrink"
            >
              <IoLogoFacebook />
            </Link>
            <Link
              to="https://www.tiktok.com/@yaelrodriguez816?_t=8nHvSDIBJKw&_r=1"
              className="bg-black p-2 inline-block text-white rounded-md hvr-pulse-shrink"
            >
              <IoLogoTiktok />
            </Link>
            <Link
              to="https://www.instagram.com/inconsciente_astral?igsh=M3NqMzAxc3B5dnZs&utm_source=qr"
              className="bg-[#9b51e0] p-2 inline-block text-white rounded-md hvr-pulse-shrink"
            >
              <IoLogoInstagram />
            </Link>
            <Link
              to="https://api.whatsapp.com/send?phone=21888493"
              className="bg-green-500 p-2 inline-block text-white rounded-md hvr-pulse-shrink"
            >
              <IoLogoWhatsapp /> 
            </Link>
          </div>
        </div>
      </section>
      <hr className="mt-12 border-[#808181]" />
      <p className="text-[#808181] text-center mt-5">Copyright © 2024 IASTRAL</p>
    </footer>
  );
};

import Link from "next/link";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoWhatsapp,
} from "react-icons/io";
import { IoLogoTiktok } from "react-icons/io5";

const socialMediaLinks = [
  {
    logo: <IoLogoFacebook />,
    link: "https://www.facebook.com/inconscienteastral?mibextid=LQQJ4d",
  },
  {
    logo: <IoLogoTiktok />,
    link: "https://www.tiktok.com/@yaelrodriguez816?_t=8nHvSDIBJKw&_r=1",
  },
  {
    logo: <IoLogoInstagram />,
    link: "https://www.instagram.com/inconsciente_astral?igsh=M3NqMzAxc3B5dnZs&utm_source=qr",
  },
  {
    logo: <IoLogoWhatsapp />,
    link: "https://api.whatsapp.com/send?phone=21888493",
  },
];

export const SocialMediaLinks = () => {
  return (
    <div className="mt-5 flex gap-3 items-center justify-center xl:justify-start">
      {socialMediaLinks.map((social, index) => (
        <Link key={index} href={social.link} className="text-[#808181]">
          {social.logo}
        </Link>
      ))}
    </div>
  );
};

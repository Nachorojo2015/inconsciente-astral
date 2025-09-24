import { Banner } from "@/components/ui/banner/Banner";
import Image from "next/image";

export default function GaleriaPage() {
  return (
    <>
      <Banner title="Galería" subtitle="Nuestras mejores fotos" />

      <section className="mt-20 flex justify-center flex-wrap xl:px-[100px] gap-5">
        <Image
          src="/images/g1.jpg"
          alt=""
          className="w-[300px]"
          width={300}
          height={300}
        />
        <Image
          src="/images/g2.jpg"
          alt=""
          className="w-[300px] hvr-shrink"
          width={300}
          height={300}
        />
        <Image
          src="/images/g3.jpg"
          alt=""
          className="w-[300px] hvr-shrink"
          width={300}
          height={300}
        />
        <Image
          src="/images/g4.jpg"
          alt=""
          className="w-[300px] hvr-shrink"
          width={300}
          height={300}
        />
        <Image
          src="/images/g5.jpg"
          alt=""
          className="w-[300px] hvr-shrink"
          width={300}
          height={300}
        />
        <Image
          src="/images/g6.jpg"
          alt=""
          className="w-[300px] hvr-shrink"
          width={300}
          height={300}
        />
        <Image
          src="/images/g7.jpg"
          alt=""
          className="w-[300px] hvr-shrink"
          width={300}
          height={300}
        />
        <Image
          src="/images/g8.jpg"
          alt=""
          className="w-[300px] hvr-shrink"
          width={300}
          height={300}
        />
      </section>
    </>
  );
}

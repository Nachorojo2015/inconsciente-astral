import { Banner } from "@/components/ui/banner/Banner";
import Image from "next/image";

export default function SobreNosotrosPage() {
  return (
    <>
    <Banner title='Sobre Nosotros' subtitle='Conoce más sobre nuestra misión' />

      <div className="text-center xl:px-[400px] px-3">
        <p className="text-[#17384E] font-[600] mt-12">QUE HACEMOS</p>
        <p className="mt-5 text-left text-xl">
          Dedicamos esta página a todos los que buscan entender más sobre su
          conexión con el cosmos y encontrar guía en los patrones del universo.
          Aquí, compartimos información, herramientas y recursos para que cada
          uno pueda profundizar en el maravilloso mundo de la astrología y
          descubrir las respuestas que buscan en las estrellas.
        </p>
      </div>

      <section className="mt-12 px-2">
        <h4 className="text-center xl:text-[40px] text-3xl font-[600] mt-5">
          POR QUÉ ELEGIRNOS
        </h4>
        <article className="flex flex-wrap items-center justify-center gap-12 mt-12">
          <div>
            <p className="text-2xl font-[600] text-center">LOREM IPSUM</p>
            <p className="xl:w-[500px] leading-7 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque amet obcaecati quia vel aliquid, facilis corporis
              tempore! Ullam veritatis alias rerum aliquam. Ipsa nobis harum
              quia tenetur sed nisi inventore.
            </p>
          </div>
          <div>
            <Image
              src="/images/benifet-1.jpg"
              alt="person-with-a-glass-in-his-hand"
              className="h-[300px] rounded-md object-cover"
              width={300}
              height={300}
            />
          </div>
        </article>
        <article className="flex lg:flex-row md:flex-wrap flex-col-reverse items-center justify-center gap-12 mt-12">
          <div>
            <Image
              src="/images/benifet-2.jpg"
              alt="person-with-a-glass-in-his-hand"
              className="h-[300px] rounded-md object-cover"
              width={300}
              height={300}
            />
          </div>
          <div>
            <p className="text-2xl font-[600] text-center">LOREM IPSUM</p>
            <p className="md:w-[500px] leading-7 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque amet obcaecati quia vel aliquid, facilis corporis
              tempore! Ullam veritatis alias rerum aliquam. Ipsa nobis harum
              quia tenetur sed nisi inventore.
            </p>
          </div>
        </article>
        <article className="flex flex-wrap items-center justify-center gap-12 mt-12">
          <div>
            <p className="text-2xl font-[600] text-center">
              LOREM IPSUM
            </p>
            <p className="md:w-[500px] leading-7 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque amet obcaecati quia vel aliquid, facilis corporis
              tempore! Ullam veritatis alias rerum aliquam. Ipsa nobis harum
              quia tenetur sed nisi inventore.
            </p>
          </div>
          <div>
            <Image
              src="/images/benifet-3.jpg"
              alt="person-with-a-glass-in-his-hand"
              className="h-[300px] rounded-md object-cover"
              width={300}
              height={300}
            />
          </div>
        </article>
      </section>
    </>
  );
}
import { ServiceCard } from "@/components/ui/service-card/ServiceCard";
import Link from "next/link";
import { GiCardPickup } from "react-icons/gi";
import { TbCards } from "react-icons/tb";

export default function Home() {
  return (
    <>
      <div className="text-center mt-20">
        <p className="text-4xl font-light">Bienvenida/o a nuestro sitio</p>
        <h1 className="text-3xl mt-3 text-purple-500">IASTRAL</h1>
      </div>

      <div className="xl:px-[400px] mt-20 px-3">
        <h3 className="text-center xl:text-[35px] text-2xl">
          SOMOS HUMANOS QUE CREEN EN LA ASTROLOGÍA
        </h3>
        <p className="text-left mt-5 text-xl">
          La astrología es una disciplina antigua que estudia la influencia de
          los cuerpos celestes en los eventos y el comportamiento humano. Se
          basa en la premisa de que la posición y el movimiento de los astros en
          el momento del nacimiento de una persona pueden influir en su
          personalidad, sus relaciones y su destino.
        </p>
      </div>

      <h2 className="text-center mt-20 text-xl font-[500]">
        Nuestros servicios
      </h2>

      <section className="mt-12 flex flex-wrap justify-center gap-12 xl:px-24 px-5">
        <ServiceCard
          title="Tarot"
          description="El tarot es una disciplina que permite analizar, reflexionar, recibir un consejo o bien obtener un pronóstico sobre el futuro. Un espejo que refleja tus pensamientos y emociones."
          icon={<TbCards size={60}/>}
        />

        <ServiceCard
          title="Carta Astral"
          description="Se trata de la herramienta de autoconocimiento básica de la astrología y describe las energías que conforman la esencia de cada persona."
          icon={<GiCardPickup size={60}/>}
        />
      </section>

      <section className="mt-[120px] px-8">
        <p className="text-center text-[#17384E] text-[16px] mt-12">
          NUESTRA MISIÓN Y VISIÓN
        </p>
        <div className="xl:px-[400px] mt-5">
          <h3 className="text-center text-3xl text-[35px]">
            VE EL FUTURO CON NOSOTROS
          </h3>
          <p className="text-left mt-5 text-xl">
            Creemos que la astrología puede ofrecer valiosas percepciones sobre
            nosotros mismos y ayudarnos a comprender mejor nuestras fortalezas y
            debilidades. Nos apasiona explorar cómo los tránsitos planetarios
            actuales afectan nuestra vida diaria y cómo podemos usar este
            conocimiento para tomar decisiones más informadas y alineadas con
            nuestro verdadero ser.
          </p>
          <div className="text-white text-center mt-5">
            <Link
              href="/sobre-nosotros"
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
              Leer más
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

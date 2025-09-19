import { Banner } from "../../components/ui/banner/Banner";

export const Galeria = () => {
  return (
    <main className="min-h-screen">
      <Banner title='Galería' subtitle='Nuestras mejores fotos' />

      <section class="mt-20 flex justify-center flex-wrap xl:px-[100px] gap-5">
        <img src="/images/g1.jpg" alt="" class="w-[300px] hvr-shrink" />
        <img src="/images/g2.jpg" alt="" class="w-[300px] hvr-shrink" />
        <img src="/images/g3.jpg" alt="" class="w-[300px] hvr-shrink" />
        <img src="/images/g4.jpg" alt="" class="w-[300px] hvr-shrink" />
        <img src="/images/g5.jpg" alt="" class="w-[300px] hvr-shrink" />
        <img src="/images/g6.jpg" alt="" class="w-[300px] hvr-shrink" />
        <img src="/images/g7.jpg" alt="" class="w-[300px] hvr-shrink" />
        <img src="/images/g8.jpg" alt="" class="w-[300px] hvr-shrink" />
      </section>

    </main>
  );
};

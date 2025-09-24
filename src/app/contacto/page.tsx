import { ContactForm } from "@/components/mail/ContactForm";
import { Banner } from "@/components/ui/banner/Banner";

export default function ContactoPage() {
  return (
    <>
      <Banner title="Contacto" subtitle="Estamos aquí para ayudarte" />

      <section className="flex flex-wrap items-center justify-center mt-20 gap-[100px]">
        <ContactForm />
        <div className="px-3 xl:text-left text-center">
          <p className="mt-12 text-[#17384E] font-[600] text-xl">
            Detalles de contacto
          </p>
          <p className="mt-5 font-[500] text-[18px]">
            <b>Teléfono:</b> +11 2188-8493
          </p>
          <p className="mt-3 font-[500] text-[18px]">
            <b>Correo Electrónico:</b> Inconscienteastral@gmail.com
          </p>
        </div>
      </section>
    </>
  );
}

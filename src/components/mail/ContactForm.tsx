'use client';

import { useState } from "react";
import { toast } from "react-hot-toast";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:3000/send-mail", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      toast.success("Mensaje enviado con éxito");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast.error("Error al enviar el mensaje");
    }
  };
  return (
    <form className="bg-slate-50 md:p-12 p-5" onSubmit={handleSubmit}>
      <p className="font-[600] text-3xl">Contacto</p>
      <input
        name="name"
        placeholder="Nombre Completo"
        required
        onChange={handleChange}
        className="md:w-[500px] w-[300px] mt-5 bg-[#EDEDED] p-2 rounded-sm placeholder:text-[#808181] border border-black block"
      />
      <input
        type="email"
        name="email"
        placeholder="Correo Electrónico"
        required
        onChange={handleChange}
        className="md:w-[500px] w-[300px] mt-5 bg-[#EDEDED] p-2 rounded-sm placeholder:text-[#808181] border border-black block"
      />
      <textarea
        required
        placeholder="Escriba su mensaje..."
        name="message"
        onChange={handleChange}
        className="md:w-[500px] w-[300px] h-[150px] [field-sizing:content] resize-none mt-5 bg-[#EDEDED] p-2 rounded-sm placeholder:text-[#808181] border border-black block"
      ></textarea>
      <button
        className="md:w-[500px] w-[300px] bg-[#17384e] mt-12 p-3 text-white font-[600] text-xl transition hover:bg-orange-300"
        type="submit"
      >
        Eviar Mensaje
      </button>
    </form>
  );
};

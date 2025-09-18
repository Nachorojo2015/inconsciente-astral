export const Banner = ({ title, subtitle }) => {
  return (
    <section
      className="bg-cover bg-no-repeat h-[300px] relative bg-[url('/images/sub-banner.jpg')]"
      style={{ filter: "brightness(50%)" }}
    >
      <div className="absolute top-[40%] xl:left-[200px] left-8 xl:px-24">
        <p className="text-xl text-white">{title}</p>
        <h1 className="mt-5 text-3xl text-white">{subtitle}</h1>
      </div>
    </section>
  );
};

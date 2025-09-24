interface Props {
    title: string;
    subtitle: string;
}

export const Banner = ({ title, subtitle }: Props) => {
  return (
    <section className="bg-cover bg-no-repeat h-[300px] relative bg-[url('/images/banner.jpg')]">
      <div className="absolute top-[40%] xl:left-[200px] left-8 xl:px-24">
        <p className="text-xl text-white">{title}</p>
        <h1 className="mt-5 text-3xl text-white">{subtitle}</h1>
      </div>
    </section>
  );
};

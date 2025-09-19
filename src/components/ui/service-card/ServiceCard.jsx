export const ServiceCard = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-[#07273c] p-10 text-white rounded-md hvr-float-shadow">
      <div className="bg-[#0c3a589b] inline-block rounded-full p-2">
        <img
          src={imageUrl}
          alt="service-palm-reading"
          className="transition-all duration-300"
        />
      </div>
      <p className="text-2xl mt-3 font-[500]">{title}</p>
      <p className="w-[300px] mt-2">{description}</p>
    </div>
  );
};

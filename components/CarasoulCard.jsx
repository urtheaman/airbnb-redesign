import Image from "next/image";

const CarasoulCard = ({ img, title }) => {
  return (
    <div className="my-2 cursor-pointer hover:scale-105 transition-transform duration-150 ease-out">
      <div className="relative w-full sm:h-40 md:h-80">
        <Image src={img} alt={title} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="text-2xl mt-2">{title}</h3>
    </div>
  );
};

export default CarasoulCard;

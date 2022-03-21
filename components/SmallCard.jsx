import Image from "next/image";

const SmallCard = ({ img, location, distance }) => {
  return (
    <div className="flex items-center mx-2 my-4 space-x-4 rounded-lg cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-100 ease-out">
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" alt="Image" />
      </div>

      <div>
        <h2 className="text-lg  ">{location}</h2>
        <h3 className="text-gray-500 text-md">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;

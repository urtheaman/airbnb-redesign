import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { HeartIcon as HeartFullIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/outline";

const InfoCard = ({
  data: { img, location, title, description, star, price, total, long, lat },
}) => {
  return (
    <div className="py-4 px-4 flex border-b first:border-t cursor-pointer hover:shadow-lg hover:opacity-95 hover:bg-slate-50 active:scale-[.98] tranition duration-100 ease-out select-none">
      <div className="relative w-48 h-36 sm:h-40 sm:w-56 md:h-56 md:w-80 flex-shrink-0">
        <Image
          src={img}
          alt={title}
          layout="fill"
          className="rounded-lg"
          objectFit="cover"
        />
      </div>

      <div className="relative w-full ml-4  flex flex-col">
        <div className="flex-grow">
          <p className="paragraph-text">{location}</p>
          <h3 className="text-lg md:text-xl capitalize">{title}</h3>
          <div className="border-b w-10 pt-4 mb-4"></div>
          <p className="paragraph-text hidden sm:inline">{description}</p>
          <HeartIcon className="absolute top-0 right-0 h-8 w-8" />
        </div>

        <div className="flex justify-between items-end">
          <p className="flex items-center">
            <StarIcon className="text-red-400 mr-2 h-6 w-6" />
            {star}
          </p>

          <div className="grid grid-cols-1 gap-1 justify-items-end">
            <span className="text-md sm:text-lg md:text-xl font-semibold">
              {price}
            </span>
            <span className="text-gray-500 text-xs sm:text-sm">{total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

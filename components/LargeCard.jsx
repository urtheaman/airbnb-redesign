import Image from "next/image";

const LargeCard = ({ img, title, subtitle, btnContent }) => {
  return (
    <div className="relative h-[200px] md:h-[300px] lg:h-[380px] cursor-pointer">
      <div className="relative w-full h-full">
        <Image
          src={img}
          layout="fill"
          placeholder="empty"
          objectFit="cover"
          alt="large image layout"
          className="rounded-xl"
        />
      </div>

      <div className="absolute top-8 left-8 md:top-12 md:left-12 lg:top-16 lg:left-16 space-y-2 md:space-y-3 lg:space-y-4 z-99">
        <h3 className="text-xl md:text-3xl lg:text-4xl capitalize md:leading-10 w-40 md:w-52 lg:w-64">
          {title}
        </h3>
        <p className="capitalize text-sm md:text-lg">{subtitle}</p>
        <button className="capitalize rounded-lg bg-black text-white text-sm md:text-lg py-2 px-4">
          {btnContent}
        </button>
      </div>
    </div>
  );
};

export default LargeCard;

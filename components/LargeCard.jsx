import Image from "next/image";

const LargeCard = ({ img, title, subtitle, btnContent }) => {
  return (
    <div className="relative h-[380px] cursor-pointer">
      <div className="relative w-full h-full">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          alt="large image layout"
          className="rounded-xl"
        />
      </div>

      <div className="absolute top-16 z-99 left-16 space-y-4">
        <h3 className="text-4xl capitalize leading-10 w-64">{title}</h3>
        <p className="capitalize">{subtitle}</p>
        <button className="capitalize rounded-lg bg-black text-white py-2 px-4">
          {btnContent}
        </button>
      </div>
    </div>
  );
};

export default LargeCard;

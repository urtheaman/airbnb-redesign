import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[480px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        alt="Banner"
        priority={true}
        objectFit="cover"
        objectPosition="bottom"
        layout="fill"
      />

      <div className="text-black absolute top-1/2 transform -translate-y-1/2 w-full text-center">
        <p className="text-sm sm:text-xl">Not sure where to go? Perfect.</p>
        <button className="text-purple-500 bg-white py-4 px-10 font-bold rounded-full shadow-md mt-3 lg:mt-5 hover:shadow-xl active:scale-90 transition duration-150">
          Click here
        </button>
      </div>
    </div>
  );
};

export default Banner;

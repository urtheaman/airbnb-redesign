import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

const Header = () => {
  return (
    <header className="sticky top-0 z-20 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          objectFit="contain"
          alt="Banner"
          objectPosition="left"
          layout="fill"
        />
      </div>

      <div className="invisible sm:visible border-2 rounded-full flex py-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Start your search"
          className="outline-none pl-5 bg-transparent flex-grow text-gray-400 placeholder-gray-400"
        />
        <SearchIcon className="hidden md:inline-flex w-8 md:mx-2 text-white bg-red-400 rounded-full p-2 cursor-pointer" />
      </div>

      <div className="flex items-center justify-self-end space-x-4 text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex border-2 p-2 items-center space-x-2 rounded-full">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;

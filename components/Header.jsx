import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  const structureDate = (date) => {
    const dateObj = new Date(date);
    const month = dateObj.getMonth();
    const year = dateObj.getFullYear();
    const day = dateObj.getDate();
    return `${day}-${month}-${year}`;
  };

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };
  const rangeHandler = (range) => {
    setStartDate(range.selection.startDate);
    setEndDate(range.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const resetInput = () => {
    setSearch("");
    setEndDate(new Date());
    setStartDate(new Date());
    setNoOfGuests(1);
  };

  const searchRedirect = () =>
    router.push({
      pathname: "search",
      query: {
        location: encodeURIComponent(search),
        startDate: encodeURIComponent(structureDate(startDate)),
        endDate: encodeURIComponent(structureDate(endDate)),
        noOfGuests: encodeURIComponent(noOfGuests),
      },
    });

  return (
    <header className="sticky top-0 z-20 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          objectFit="contain"
          alt="Banner"
          onClick={() => router.push("/")}
          className="cursor-pointer"
          objectPosition="left"
          layout="fill"
        />
      </div>

      <div className="invisible sm:visible border-2 rounded-full flex py-2 md:shadow-sm">
        <input
          type="text"
          value={search}
          onChange={searchHandler}
          placeholder="Start your search"
          className="outline-none pl-5 bg-transparent flex-grow text-gray-400 placeholder-gray-400"
          onKeyPress={(e) => e.key === "Enter" && searchRedirect()}
        />
        <SearchIcon className="hidden lg:inline-flex w-8 md:mx-2 text-white bg-red-400 rounded-full p-2 cursor-pointer" />
      </div>

      <div className="flex items-center justify-self-end space-x-4 text-gray-500">
        <p className="hidden lg:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex border-2 p-2 items-center space-x-2 rounded-full">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>

      {search && (
        <div className="flex flex-col col-span-3 mx-auto my-2  ">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={rangeHandler}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
          />

          <div className="capitalize flex border-b items-center my-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of guests
            </h2>
            <UsersIcon className="h-6" />
            <input
              type="number"
              min={1}
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              className="w-12 rounded outline-none pl-2 text-red-500 placeholder:text-red-500 text-2xl  font-semibold"
            />
          </div>

          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-400">
              Cancel
            </button>
            <button onClick={searchRedirect} className="flex-grow text-red-500">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

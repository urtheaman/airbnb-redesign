import Header from "../components/Header";
import Footer from "../components/Footer";
import InfoCard from "../components/InfoCard";
import { useRouter } from "next/dist/client/router";
import CustomMap from "../components/Map";

const Search = ({ searchData }) => {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  const start = decodeURIComponent(startDate);
  const end = decodeURIComponent(endDate);
  const readableLocation = decodeURIComponent(location);
  console.log(location, start, end, noOfGuests);
  return (
    <div>
      <Header />

      <main className="flex flex-col m-6 md:m-8 md:mt-10">
        <section>
          <p className="text-xs">
            300+ Stays for {noOfGuests}{" "}
            {noOfGuests === "1" ? "guest" : " guests"}{" "}
            {start == end ? "for today" : `from ${start} to ${end}`}
          </p>
          <h1 className="text-2xl capitalize md:text-3xl font-semibold my-4">
            Stays in {readableLocation}
          </h1>

          <div className="hidden md:inline-flex mb-5 space-x-3">
            <button className="button">Cancellation flexibility</button>
            <button className="button">Type of price</button>
            <button className="button">Flexible Price</button>
            <button className="button">Rooms and beds</button>
            <button className="button">More filters</button>
          </div>
        </section>

        <section className="flex flex-row w-full h-full">
          <div className="space-y-2 max-w-full infoCardBreakpoint:min-w-[60%]">
            {searchData.map((data, index) => {
              return (
                <InfoCard
                  key={index}
                  currentLocation={readableLocation}
                  data={data}
                />
              );
            })}
          </div>
          <div className="hidden infoCardBreakpoint:inline-flex flex-grow">
            <CustomMap searchData={searchData} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch("https://links.papareact.com/isz");
  const searchData = await res.json();

  return {
    props: {
      searchData,
    },
  };
};

export default Search;

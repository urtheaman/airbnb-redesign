import Header from "../components/Header";
import Footer from "../components/Footer";
import InfoCard from "../components/InfoCard";

const Search = ({ searchData }) => {
  return (
    <div>
      <Header />

      <main className="flex flex-col m-6">
        <section>
          <p className="text-xs">300+ Stays for 5 guests</p>
          <h1 className="text-2xl md:text-3xl font-semibold my-4">
            Stays in London
          </h1>

          <div className="hidden md:inline-flex mb-5 space-x-3">
            <button className="button">Cancellation flexibility</button>
            <button className="button">Type of price</button>
            <button className="button">Flexible Price</button>
            <button className="button">Rooms and beds</button>
            <button className="button">More filters</button>
          </div>
        </section>

        <section>
          <div className="space-y-2 max-w-full infoCardBreakpoint:max-w-[60%]">
            {searchData.map((data, index) => {
              return <InfoCard key={index} data={data} />;
            })}
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

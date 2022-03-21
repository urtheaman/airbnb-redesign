import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
import CarasoulCard from "../components/CarasoulCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

const Home = ({ exploreData, carasoulCardData }) => {
  return (
    <div>
      <Head>
        <title>Airbnb V2</title>
      </Head>

      <div className="app">
        <Header />
        <Banner />

        <main className="max-w-7xl mx-auto px-8 sm:px-16">
          <section>
            <h2 className="text-4xl font-semibold py-6">Explore Nearby</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-3">
              {exploreData?.map(({ img, location, distance }) => (
                <SmallCard
                  img={img}
                  location={location}
                  distance={distance}
                  key={img}
                />
              ))}
            </div>
          </section>

          <section className="overflow-scroll scrollbar-hide">
            <h2 className="text-4xl font-semibold py-6">Live Anywhere</h2>
            <div id="carasoul" className="flex items-center gap-4 p-2">
              {carasoulCardData?.map(({ img, title }, index) => {
                return <CarasoulCard key={index} img={img} title={title} />;
              })}
            </div>
          </section>

          <section className="my-16">
            <LargeCard
              img="https://links.papareact.com/4cj"
              title="The greatest outdoors"
              subtitle="Wishlist curated by Airbnb"
              btnContent="Get inspired"
            />
          </section>
        </main>
        <footer className="bg-gray-100 border-t ">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://links.papareact.com/pyp");
  const exploreData = await res.json();

  const response = await fetch("https://links.papareact.com/zp1");
  const carasoulCardData = await response.json();

  return {
    props: {
      exploreData,
      carasoulCardData,
    },
  };
}

export default Home;

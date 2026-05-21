import FeaturedCollections from "../Components/Home/FeaturedCollections";
import HeroCarousel from "../Components/Home/HeroCarousel";
import NetworkCTA from "../Components/Home/NetworkCTA";
import NewArrivals from "../Components/Home/NewArrivals";
import MainLayout from "../Layout/MainLayout";


const Home = () => {
  return (
    <MainLayout>

      <HeroCarousel />

      <section id="collections">
        <FeaturedCollections />
      </section>

      <section id="new-arrivals">
        <NewArrivals />
      </section>

      <section id="network">
        <NetworkCTA />
      </section>

    </MainLayout>
  );
};

export default Home;
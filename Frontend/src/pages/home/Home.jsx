import HeroCarousel from "../../components/common/HeroCarousel";
import NetworkCTA from "../../components/common/NetworkCTA";
import FeaturedCollections from "../../components/product/FeaturedCollections";
import RelatedProducts from "../../components/product/RelatedProducts";
import MainLayout from "../../layouts/MainLayout";


const Home = () => {
  return (
    <MainLayout>

      <HeroCarousel />

      <section id="collections">
        <FeaturedCollections />
      </section>

      <section id="new-arrivals">
        <RelatedProducts />
      </section>

      <section id="network">
        <NetworkCTA />
      </section>

    </MainLayout>
  );
};

export default Home;

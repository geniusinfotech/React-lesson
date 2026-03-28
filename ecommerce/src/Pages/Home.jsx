import ProductBar from "../Components/Home/ProductBar";
import Hero from "../Components/Home/Hero";
import DeatilsBar from "../Components/Home/DeatilsBar";
import CategoryBar from "../Components/Home/CategoryBar";
import Offer from "../Components/Home/Offer";
import DealBar from "../Components/Home/DealBar";
import DiscontBar from "../Components/Home/DiscontBar";
import Newsletter from "../Components/Home/Newsletter";

const Home = () => {
  return (
    <>
      <Hero />
      <DeatilsBar />
      <CategoryBar />
      <ProductBar />
      <Offer />
      <DealBar />
      <DiscontBar />
      <Newsletter />
    </>
  );
};

export default Home;

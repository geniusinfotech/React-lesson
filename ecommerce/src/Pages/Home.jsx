import ProductBar from "../Components/Home/ProductBar";
import Hero from "../Components/Home/Hero";
import DeatilsBar from "../Components/Home/DeatilsBar";
import CategoryBar from "../Components/Home/CategoryBar";

const Home = () => {
  return (
    <>
      <Hero />
      <DeatilsBar />
      <CategoryBar />
      <ProductBar />
    </>
  );
};

export default Home;

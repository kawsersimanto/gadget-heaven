import { Helmet } from "react-helmet";
import Banner from "../../components/home/Banner";
import ProductGrid from "../../components/home/ProductGrid";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Gadget Heaven | Home</title>
        <meta
          name="description"
          content="Explore the latest gadgets on Gadget Heaven."
        />
      </Helmet>
      <Banner />
      <ProductGrid />
    </>
  );
};

export default Home;

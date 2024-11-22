import products from "../../data/products/products";
import CategoryButton from "../CategoryButton/CategoryButton";
import Product from "../Product/Product";

const ProductGrid = () => {
  return (
    <section className="lg:py-[100px] md:py-[80px] py-[60px]">
      <div className="container">
        <h2 className="text-[#0B0B0B] font-bold text-[40px] mb-[48px] text-center">
          Explore Cutting-Edge Gadgets
        </h2>
        <div className="flex md:flex-row flex-col justify-between gap-6 items-start">
          <div className="md:w-[240px] w-full bg-white sm:p-6 p-2 rounded-2xl flex sm:flex-col sm:gap-6 gap-3 md:sticky md:top-[5%] overflow-auto">
            <CategoryButton>Laptops</CategoryButton>
            <CategoryButton>Laptops</CategoryButton>
            <CategoryButton>Laptops</CategoryButton>
            <CategoryButton>Laptops</CategoryButton>
            <CategoryButton>Laptops</CategoryButton>
          </div>
          <div className="md:w-[1016px] w-full">
            <div className="grid lg:grid-cols-3 grid-cols-2 sm:gap-6 gap-4">
              {products.map((product, id) => (
                <Product key={id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;

import useFetch from "../../hooks/useFetch";
import CategoryButton from "../CategoryButton/CategoryButton";
import Product from "../Product/Product";
import { useSearchParams } from "react-router-dom";

const ProductGrid = () => {
  const { data: products, loading: isLoadingProducts } = useFetch(
    "https://raw.githubusercontent.com/kawsersimanto/gadget-heaven/refs/heads/main/public/products.json",
    []
  );
  const { data: categories, loading: isLoadingCategories } = useFetch(
    "https://raw.githubusercontent.com/kawsersimanto/gadget-heaven/refs/heads/main/public/categories.json",
    []
  );

  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("tab") || "All Products";

  const filteredProducts =
    selectedCategory === "All Products"
      ? products
      : products.filter((product) => product?.category === selectedCategory);

  const handleCategoryClick = (category) => {
    if (category?.name === "All Products") {
      setSearchParams({});
    } else {
      setSearchParams({ tab: category.name });
    }
  };

  return (
    <section className="lg:py-[100px] md:py-[80px] py-[60px]">
      <div className="container">
        <h2 className="text-[#0B0B0B] font-bold text-[40px] mb-[48px] text-center">
          Explore Cutting-Edge Gadgets
        </h2>
        <div className="flex md:flex-row flex-col justify-between gap-6 items-start">
          <div className="md:w-[240px] w-full bg-white sm:p-6 p-2 rounded-2xl flex sm:flex-col sm:gap-6 gap-3 md:sticky md:top-[5%] overflow-auto">
            {isLoadingCategories ? (
              <p className="bg-white p-6 lg:col-span-3 col-span-2 rounded-2xl h-[200px] flex items-center justify-center">
                <span className="loading loading-bars loading-lg"></span>
              </p>
            ) : (
              categories.map((category) => (
                <CategoryButton
                  key={category?.id}
                  category={category}
                  setActive={category?.name === selectedCategory}
                  handleCategoryClick={handleCategoryClick}
                />
              ))
            )}
          </div>
          <div className="md:w-[1016px] w-full">
            <div className="grid lg:grid-cols-3 grid-cols-2 sm:gap-6 gap-4">
              {isLoadingProducts ? (
                <p className="bg-white p-6 lg:col-span-3 col-span-2 rounded-2xl h-[400px] flex items-center justify-center">
                  <span className="loading loading-bars loading-lg"></span>
                </p>
              ) : filteredProducts.length ? (
                filteredProducts.map((product, id) => (
                  <Product key={id} product={product} />
                ))
              ) : (
                <p className="bg-white p-6 lg:col-span-3 col-span-2 rounded-2xl">
                  No Product found in this category
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;

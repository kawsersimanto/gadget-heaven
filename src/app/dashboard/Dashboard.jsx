import { useState } from "react";
import { cn } from "../../utils/cn";
import CartIcon from "../../components/ui/icons/CartIcon";

const Dashboard = () => {
  const [tab, setTab] = useState("cart");
  return (
    <section>
      <div className="py-8 bg-primary">
        <div className="container">
          <h2 className="text-white text-center mb-4 lg:text-[32px] text-2xl font-bold">
            Dashboard
          </h2>
          <p className="text-center text-white max-w-[796px] mx-auto mb-8">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="flex items-center justify-center md:gap-6 gap-2">
            <button
              className={cn(
                `btn md:rounded-[32px] rounded-3xl md:py-[15px] md:px-[64px] px-4 py-2 text-[18px] h-auto sm:text-inherit text-sm hover:bg-slate-200 !text-white hover:!text-primary ${
                  tab === "cart"
                    ? "btn-primary !text-primary bg-white"
                    : "border-white"
                }`
              )}
              onClick={() => setTab("cart")}
            >
              Cart
            </button>
            <button
              className={cn(
                `btn md:rounded-[32px] rounded-3xl md:py-[15px] md:px-[64px] px-4 py-2 text-[18px] h-auto sm:text-inherit text-sm hover:bg-slate-200 !text-white hover:!text-primary ${
                  tab === "wishlist"
                    ? "btn-primary !text-primary bg-white"
                    : "border-white"
                }`
              )}
              onClick={() => setTab("wishlist")}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
      {tab === "cart" && (
        <div className="container">
          <div className="pt-[48px] md:pb-[100px] pb-[60px]">
            <h4 className="mb-8 font-semibold text-2xl text-[#0B0B0B]">Cart</h4>
            <div className="gl:p-8 p-4 rounded-2xl bg-white flex sm:flex-row flex-col items-center w-full gap-8">
              <img
                src="/woocommerce-placeholder.png"
                alt=""
                className="sm:w-[275px] w-full sm:h-[192px] h-[240px] object-cover object-center drop-shadow-md rounded-xl"
              />
              <div className="flex flex-col gap-4 items-start relative flex-grow">
                <img
                  src="/cross.svg"
                  alt="Remove Icon"
                  className="absolute top-0 right-0 z-10 lg:w-[36px] w-[30px]"
                />
                <h4 className="text-[24px] font-semibold text-[#09080F] max-w-[160px]">
                  Dell XPS 13
                </h4>
                <p>
                  <span className="text-base font-semibold">Description:</span>{" "}
                  <span className="text-light-gray-200">
                    Ultra-slim, high-performance laptop with 13.4-inch
                    InfinityEdge display.
                  </span>
                </p>
                <p className="text-base font-semibold">Price: $999.99</p>
                <button
                  // disabled={!product?.in_stock || isProductInCart}
                  className="btn btn-primary !text-white !h-auto !min-h-[auto] rounded-[32px] xl:py-3 py-1 xl:px-[22px] disabled:bg-primary disabled:opacity-85 disabled:text-white lg:text-inherit text-[12px]"
                  // onClick={() => handleAddToCart(product)}
                >
                  {/* {isProductInCart ? "Already in Cart" : "Add to Cart"} */}
                  Add To Cart
                  <CartIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {tab === "wishlist" && (
        <div className="container">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-[48px] md:pb-[100px] pb-[60px]">
            <h4 className="mb-8 font-semibold text-2xl text-[#0B0B0B]">
              Wishlist
            </h4>
          </div>
        </div>
      )}
      <div></div>
    </section>
  );
};

// btn-primary text-primary bg-white

export default Dashboard;

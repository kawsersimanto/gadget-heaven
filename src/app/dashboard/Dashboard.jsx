import { useContext, useState } from "react";
import { cn } from "../../utils/cn";
import { StoreContext } from "../../contexts/StoreContext";
import ProductCard from "../../components/Product/ProductCard";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [tab, setTab] = useState("cart");
  const { cart, wishlist } = useContext(StoreContext);

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
      <div className="container">
        <div className="pt-[48px] md:pb-[100px] pb-[60px]">
          {tab === "cart" && (
            <>
              <h4 className="mb-8 font-semibold text-2xl text-[#0B0B0B]">
                Cart
              </h4>
              <div className="flex flex-col gap-8">
                {cart?.length > 0 ? (
                  cart.map((product, id) => (
                    <ProductCard key={id} product={product} />
                  ))
                ) : (
                  <p className="p-6 bg-white rounded-2xl">
                    No product is added to cart, Go to{" "}
                    <Link to="/" className="text-primary underline">
                      Shop
                    </Link>
                  </p>
                )}
              </div>
            </>
          )}
          {tab === "wishlist" && (
            <>
              <h4 className="mb-8 font-semibold text-2xl text-[#0B0B0B]">
                Wishlist
              </h4>
              <div className="flex flex-col gap-8">
                {wishlist?.length > 0 ? (
                  wishlist.map((product, id) => (
                    <ProductCard key={id} product={product} isWishlist={true} />
                  ))
                ) : (
                  <p className="p-6 bg-white rounded-2xl">
                    No product is added to wishlist, Go to{" "}
                    <Link to="/" className="text-primary underline">
                      Shop
                    </Link>
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

// btn-primary text-primary bg-white

export default Dashboard;

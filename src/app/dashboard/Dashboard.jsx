import { cn } from "../../utils/cn";
import Cart from "../../components/cart/Cart";
import Wishlist from "../../components/wishlist/wishlist";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const [params, setParams] = useSearchParams();
  const tab = params.get("tab") || "cart";

  const handleClick = (newTab) => {
    if (tab) {
      setParams({ tab: newTab });
    } else {
      setParams({ tab: "cart" });
    }
  };

  return (
    <>
      <Helmet>
        <title>Gadget Heaven | Dashboard</title>
        <meta
          name="description"
          content="Explore the latest gadgets on Gadget Heaven."
        />
      </Helmet>
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
                onClick={() => handleClick("cart")}
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
                onClick={() => handleClick("wishlist")}
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="pt-[48px] md:pb-[100px] pb-[60px]">
            {tab === "cart" && <Cart />}
            {tab === "wishlist" && <Wishlist />}
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;

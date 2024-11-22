import { Rating } from "@smastrom/react-rating";
import { useLoaderData, useParams } from "react-router-dom";
import "@smastrom/react-rating/style.css";
import CartIcon from "../../components/ui/icons/CartIcon";

const ProductDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const product = data.find((item) => item.product_id === id);
  console.log(product);

  return (
    <section>
      <div className="pt-8 pb-[238px] bg-primary">
        <div className="container">
          <h2 className="text-white text-center mb-4 lg:text-[32px] text-2xl font-bold">
            Product Details
          </h2>
          <p className="text-center text-white max-w-[796px] mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>
      <div className="lg:pb-[100px] md:pb-[80px] pb-[60px] mt-[-203px]">
        <div className="container">
          <div className="p-8 rounded-2xl bg-white">
            <div className="flex md:flex-row flex-col gap-8">
              <img
                src={product?.product_image || "/woocommerce-placeholder.png"}
                className="lg:w-[424px] w-full lg:h-[503px] h-[300px] rounded-2xl object-cover drop-shadow-xl"
                alt={product?.product_title}
              />
              <div className="flex flex-col gap-4">
                <div>
                  <h1 className="font-semibold text-[#09080F] lg:text-[28px] mb-3 text-2xl">
                    {product?.product_title || "N/A"}
                  </h1>
                  <h3>Price: ${product?.price || "N/A"}</h3>
                </div>
                <div>
                  {product?.in_stock ? (
                    <span className="py-[7px] px-[12px] rounded-[32px] text-[#309C08] border border-[#309C08] bg-[rgba(48,156,8,0.10)] text-sm">
                      In Stock
                    </span>
                  ) : (
                    <span className="py-[7px] px-[12px] rounded-[32px] text-red-500 border border-red-500 bg-red-200 text-sm">
                      Out of Stock
                    </span>
                  )}
                </div>
                <div>
                  <p className="text-light-gray-200">{product?.description}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Specification</h4>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: product?.specification || "N/A",
                    }}
                    className="specification"
                  ></div>
                </div>
                <div>
                  <div className="mb-3">
                    <span>Rating</span>⭐
                  </div>
                  <Rating
                    style={{ maxWidth: 130 }}
                    value={product?.rating || 0}
                    readOnly
                    transition="zoom"
                  />
                </div>
                <div className="flex lg:gap-4 gap-2">
                  <button
                    disabled={!product?.in_stock}
                    className="btn btn-primary text-white !h-auto !min-h-[auto] rounded-[32px] xl:py-3 py-1 xl:px-[22px] disabled:bg-primary disabled:opacity-85 disabled:text-white lg:text-inherit text-[12px]"
                  >
                    Add to Cart
                    <CartIcon />
                  </button>
                  <button
                    disabled={!product?.in_stock}
                    className="lg:w-[50px] w-[40px] lg:h-[50px] h-[40px] rounded-full border border-[rgba(11,11,11,0.10)] flex items-center justify-center"
                  >
                    <img
                      src="/wishlist.svg"
                      alt="Wishlist Icon"
                      className="w-[20px] group-hover:invert"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

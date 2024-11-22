import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const product = data.find((item) => item.product_id === id);
  console.log(product);

  return (
    <section>
      <div className="pt-8 pb-[238px] bg-primary">
        <div className="container">
          <h2 className="text-white text-center mb-4 text-[32px] font-bold">
            Product Details
          </h2>
          <p className="text-center text-white max-w-[796px] mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>
      <div className="lg:pb-[100px] md:pb-[80px] pb-[60px]">
        <div className="container">
          <div className="p-8 rounded-2xl">
            <div className="flex gap-8">
              <img
                src={product?.product_image || "/woocommerce-placeholder.png"}
                className="w-[424px] rounded-2xl object-contain"
                alt={product?.product_title}
              />
              <div className="flex flex-col gap-4">
                <div>
                  <h1 className="font-semibold text-[#09080F] text-[28px] mb-3">
                    {product?.product_title || "N/A"}
                  </h1>
                  <h3>Price: ${product?.price || "N/A"}</h3>
                </div>
                <div>
                  <span className="py-[7px] px-[12px] rounded-[32px] text-[#309C08] border border-[#309C08] bg-[rgba(48,156,8,0.10)] text-sm">
                    In Stock
                  </span>
                  <span className="py-[7px] px-[12px] rounded-[32px] text-red-500 border border-red-500 bg-red-200 text-sm">
                    Out of Stock
                  </span>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
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

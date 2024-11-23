import { Link } from "react-router-dom";
import ProductCard from "../Product/ProductCard";
import { StoreContext } from "../../contexts/StoreContext";
import { useContext } from "react";

const Wishlist = () => {
  const { wishlist } = useContext(StoreContext);
  return (
    <div>
      <h4 className="mb-8 font-semibold text-2xl text-[#0B0B0B]">Wishlist</h4>
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
    </div>
  );
};

export default Wishlist;

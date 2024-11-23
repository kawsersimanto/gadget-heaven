import { useContext } from "react";
import { StoreContext } from "../../contexts/StoreContext";
import ProductCard from "../Product/ProductCard";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useContext(StoreContext);
  return (
    <div>
      <h4 className="mb-8 font-semibold text-2xl text-[#0B0B0B]">Cart</h4>
      <div className="flex flex-col gap-8">
        {cart?.length > 0 ? (
          cart.map((product, id) => <ProductCard key={id} product={product} />)
        ) : (
          <p className="p-6 bg-white rounded-2xl">
            No product is added to cart, Go to{" "}
            <Link to="/" className="text-primary underline">
              Shop
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default Cart;

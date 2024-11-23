import PropTypes from "prop-types";
import { cn } from "../../utils/cn";
import { useContext } from "react";
import { StoreContext } from "../../contexts/StoreContext";
import { toast } from "sonner";

const ProductCard = ({ product, isWishlist }) => {
  const { cart, setCart, wishlist, setWishlist } = useContext(StoreContext);

  const handleAddToCart = (product) => {
    const isAlreadyInCart = cart.some(
      (p) => p.product_id === product.product_id
    );
    const updatedWishlist = wishlist.filter(
      (p) => p.product_id !== product.product_id
    );

    setWishlist(updatedWishlist);

    if (isAlreadyInCart) {
      toast.success(`${product.product_title} is already in the cart`);
    } else {
      setCart((prevCart) => [...prevCart, product]);
      toast.success(`${product.product_title} has been added to the cart`);
    }
  };

  const handleRemoveProduct = (product) => {
    const updateWishlist = wishlist.filter(
      (p) => p.product_id !== product.product_id
    );
    const updateCart = cart.filter((p) => p.product_id !== product.product_id);

    if (isWishlist) {
      setWishlist(updateWishlist);
      toast.success(
        `${product.product_title} has been removed from the wishlist`
      );
    } else {
      setCart(updateCart);
      toast.success(`${product.product_title} has been removed from the cart`);
    }
  };

  return (
    <div className="gl:p-8 p-4 rounded-2xl bg-white flex sm:flex-row flex-col items-center w-full gap-8">
      <img
        src={product?.product_image || "/woocommerce-placeholder.png"}
        alt={product?.product_title || "N/A"}
        className="sm:w-[275px] w-full sm:h-[192px] h-[240px] object-contain object-center drop-shadow-md rounded-xl"
      />
      <div className="flex flex-col gap-4 items-start relative flex-grow">
        <img
          src="/cross.svg"
          alt="Remove Icon"
          className="absolute top-0 right-0 z-10 lg:w-[36px] w-[30px] cursor-pointer"
          onClick={() => handleRemoveProduct(product)}
        />
        <h4 className="text-[24px] font-semibold text-[#09080F] max-w-[160px]">
          {product?.product_title || "N/A"}
        </h4>
        <p>
          <span className="text-base font-semibold">Description:</span>{" "}
          <span className="text-light-gray-200">
            {product?.description || "N/A"}
          </span>
        </p>
        <p className="text-base font-semibold">
          Price: ${product?.price?.toFixed(2) || 0}
        </p>
        <button
          disabled={!product?.in_stock}
          className={cn(
            `btn btn-primary !text-white !h-auto !min-h-[auto] rounded-[32px] xl:py-3 py-1 xl:px-[22px] disabled:bg-primary disabled:opacity-85 disabled:text-white lg:text-inherit text-[12px] ${
              isWishlist ? "" : "hidden"
            }`
          )}
          onClick={() => handleAddToCart(product)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    product_id: PropTypes.string.isRequired,
    product_title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    product_image: PropTypes.string,
    in_stock: PropTypes.number.isRequired,
  }).isRequired,
  isWishlist: PropTypes.bool,
};

export default ProductCard;

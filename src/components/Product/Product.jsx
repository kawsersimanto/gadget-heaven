import PropTypes from "prop-types";

const Product = ({ product }) => {
  return (
    <a
      href={`/product/${product.product_id}`}
      className="bg-white p-5 rounded-2xl group flex flex-col gap-6"
    >
      <div className="overflow-hidden sm:h-[180px] h-[100px] flex items-center justify-center">
        <img
          src={product.product_image}
          alt=""
          className="h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
      </div>
      <div>
        <h3 className="sm:text-2xl text-xl font-semibold sm:mb-3 mb-1 text-[#09080F] line-clamp-1">
          {product.product_title}
        </h3>
        <p className="sm:mb-4 mb-3">Price: {product.price}</p>
        <button className="btn btn-outline btn-primary sm:py-3 py-2 sm:px-6 px-3 h-auto min-h-[auto] rounded-[32px] hover:!text-white font-semibold sm:text-base text-[12px]">
          View Details
        </button>
      </div>
    </a>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    product_id: PropTypes.string,
    product_title: PropTypes.string,
    product_image: PropTypes.string,
    category: PropTypes.string,
    price: 1999,
    description: PropTypes.string,
    specification: PropTypes.string,
    availability: PropTypes.bool,
    rating: PropTypes.string,
  }).isRequired,
};

export default Product;

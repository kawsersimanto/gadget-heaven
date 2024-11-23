import { useContext, useRef } from "react";
import { StoreContext } from "../../contexts/StoreContext";
import ProductCard from "../Product/ProductCard";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useContext(StoreContext);
  const modalRef = useRef(null);

  const total = cart.reduce((sum, product) => sum + (product?.price || 0), 0);

  const handleProductSort = () => {
    const updateCart = [...cart].sort(
      (a, b) => (b?.price || 0) - (a?.price || 0)
    );
    setCart(updateCart);
  };

  const handleOpenModal = () => {
    modalRef?.current?.showModal();
  };

  const handleCloseModal = () => {
    modalRef?.current?.close();
    setCart([]);
  };

  return (
    <div>
      <div className="flex sm:flex-row flex-col justify-between sm:items-center items-start mb-8">
        <h4 className="font-semibold text-2xl text-[#0B0B0B]">Cart</h4>
        <div className="flex items-center sm:gap-4 gap-2 sm:flex-nowrap flex-wrap">
          <p>Total Cost: ${total}</p>
          <button
            className="btn btn-outline btn-primary sm:py-3 py-2 sm:px-6 px-3 h-auto min-h-[auto] rounded-[32px] hover:!text-white font-semibold sm:text-base text-[12px] group sm:flex-grow-0 flex-grow-1 sm:w-auto w-full"
            onClick={handleProductSort}
          >
            Sort by Price
            <img
              src="/sort.svg"
              alt="Sort Icon"
              className="group-hover:invert sm:w-[24px] w-[20px] object-contain"
            />
          </button>
          <button
            className="btn btn-primary !text-white !h-auto !min-h-[auto] rounded-[32px] sm:py-3 py-3 sm:px-6 px-4 disabled:bg-primary disabled:opacity-85 disabled:text-white lg:text-inherit sm:text-base text-[12px] sm:flex-grow-0 flex-grow-1 sm:w-auto w-full"
            disabled={!total}
            onClick={handleOpenModal}
          >
            {total ? "Purchase" : "Not Purchaseable"}
          </button>
        </div>
      </div>
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
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle"
        ref={modalRef}
      >
        <div className="modal-box sm:!w-[400px] flex flex-col items-center">
          <img src="/success.svg" alt="Success Icon" />
          <h3 className="font-bold text-2xl mt-6">Payment Successful</h3>
          <hr className="divider my-3" />
          <p className="text-center text-base font-medium text-[rgba(9,8,15,0.60)]">
            Thanks for purchasing.
          </p>
          <p className="text-center text-base font-medium text-[rgba(9,8,15,0.60)]">
            Total: {total?.toFixed(2) || 0}
          </p>
          <button
            className="btn btn-block py-[9px] px-2 rounded-[32px] mt-4 !h-auto min-h-[auto] bg-[rgba(17,0,0,0.03)] border-[rgba(17,0,0,0.03)] hover:border-[rgba(17,0,0,0.03)]"
            onClick={handleCloseModal}
          >
            Close
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default Cart;

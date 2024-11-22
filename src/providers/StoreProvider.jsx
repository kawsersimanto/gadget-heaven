import { useState } from "react";
import PropTypes from "prop-types";
import { StoreContext } from "../contexts/StoreContext";

function StoreProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <StoreContext.Provider value={{ cart, setCart, wishlist, setWishlist }}>
      {children}
    </StoreContext.Provider>
  );
}

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StoreProvider;

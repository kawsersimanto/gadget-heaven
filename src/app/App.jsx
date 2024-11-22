import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { useContext } from "react";
import { StoreContext } from "../contexts/StoreContext";

const App = () => {
  const location = useLocation();
  const { cart, wishlist } = useContext(StoreContext);
  console.log("cart:", cart);
  console.log(wishlist);

  return (
    <>
      {location.pathname !== "/" && <Navbar />}
      <Outlet />
      <Footer />
    </>
  );
};

export default App;

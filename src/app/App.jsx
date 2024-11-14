import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const App = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" && <Navbar />}
      <Outlet />
      <Footer />
    </>
  );
};

export default App;

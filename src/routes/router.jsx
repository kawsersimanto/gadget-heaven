import { createBrowserRouter } from "react-router-dom";
import App from "../app/App.jsx";
import Home from "../app/home/Home.jsx";
import Dashboard from "../app/dashboard/Dashboard.jsx";
import NotFound from "../app/not-found.jsx";
import ProductDetails from "../app/product-details/ProductDetails.jsx";
import Qna from "../app/qna/Faq.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/qna",
        element: <Qna />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/product/:id",
        loader: async () => {
          const response = await fetch(
            "https://raw.githubusercontent.com/kawsersimanto/gadget-heaven/refs/heads/main/public/products.json"
          );
          if (!response.ok) {
            throw new Error("Failed to fetch products");
          }
          const products = await response.json();
          return products; // Return the parsed array of products
        },
        element: <ProductDetails />,
      },
    ],
  },
]);

export default router;

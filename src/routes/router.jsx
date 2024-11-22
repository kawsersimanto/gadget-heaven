import { createBrowserRouter } from "react-router-dom";
import App from "../app/App.jsx";
import Home from "../app/home/Home.jsx";
import Statistics from "../app/statistics/Statistics.jsx";
import Dashboard from "../app/dashboard/Dashboard.jsx";
import NotFound from "../app/not-found.jsx";

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
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/product/:id",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;

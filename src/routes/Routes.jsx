import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";
import CoffeeLists from "../components/CoffeeLists";
import NoFound from "../pages/NoFound";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NoFound></NoFound>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/category/:categoryName",
            loader: () => fetch("../coffees.json"),
            element: <CoffeeLists></CoffeeLists>,
          },
        ],
      },
      {
        path: "/coffees",
        element: <Coffees></Coffees>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

export { router };

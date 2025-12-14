import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";
import CoffeeDetails from "../pages/CoffeeDetails";
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
        loader: () => fetch("../categories.json"),
        element: <Home></Home>,
        children: [
          {
            path: "/",
            loader: () => fetch("../coffees.json"),
            element: <CoffeeLists></CoffeeLists>,
          },
          {
            path: "/category/:categoryName",
            loader: () => fetch("../coffees.json"),
            element: <CoffeeLists></CoffeeLists>,
          },
        ],
      },
      {
        path: "/coffees",
        loader: () => fetch("../coffees.json"),
        element: <Coffees></Coffees>,
      },
      {
        path: "/coffee/:coffeeId",
        loader: () => fetch("../coffees.json"),
        element: <CoffeeDetails></CoffeeDetails>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

export { router };

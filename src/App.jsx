// import { Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import Malewear from "./pages/menswear/Malewear";
import Womenswear from "./pages/womenswear/Womenswear";
import Health_beauty from "./pages/Health_beauty/Health_beauty";
import Bag from "./pages/Bag/Bag";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Reset from "./auth/Reset";
import { productsData } from "./api/Api";
import Product from "./components/productDetails/Product";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
// import AuthLayout from "./layout/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsData,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/mens_fashion",
        element: <Malewear />,
      },
      {
        path: "/womens_fashion",
        element: <Womenswear />,
      },
      {
        path: "/health_beauty",
        element: <Health_beauty />,
      },
      {
        path: "/bag",
        element: <Bag />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/auth_reset",
        element: <Reset />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="font-bodyFont bg-blue-50">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

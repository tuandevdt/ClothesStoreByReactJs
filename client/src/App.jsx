import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from "./pages/user/HomePage";
import AboutPage from "./pages/user/AboutPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProductPage from "./pages/user/ProductPage";
import DetailPage from "./pages/user/DetailPage";
import NewPage from "./pages/user/NewPage";
import AdminUser from "./pages/admin/AdminUser";
import AdminCategory from "./pages/admin/AdminCategory";
import AdminProduct from "./pages/admin/AdminProduct";
import CartPage from "./pages/user/CartPage";
import CheckoutPage from "./pages/user/CheckoutPage";
import PageNotFound from "./pages/pageNotFound";
import Root from "./Root";
import Admin from "./Admin";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {path: "", element: <HomePage />,},
        {path: "about", element: <AboutPage />,},
        {path: "products", element: <ProductPage />,},
        {path: "products/detail", element: <DetailPage />,},
        {path: "news",element: <NewPage />,},
        {path: "cart",element: <CartPage />,},
        {path: "checkout",element: <CheckoutPage />,},
      ],
    },
    {
      path: "/admin",
      element: <Admin />,
      children: [
        {path: "dashboard",element: <AdminDashboard />,},
        {path: "users",element: <AdminUser />,},
        {path: "categories",element: <AdminCategory />,},
        {path: "products",element: <AdminProduct />,},
      ],
    },
    {path: "**", element: <PageNotFound />}

  ]);

  return <RouterProvider router={router} />;
};


export default App;

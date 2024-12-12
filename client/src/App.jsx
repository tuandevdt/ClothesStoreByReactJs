import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

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
import Todo from "./pages/Todo";
import Login from "./pages/Login";
import Register from "./pages/Register";
import OrderPage from "./pages/user/OrderPage";
import OrderDetailPage from "./pages/user/OrderDetailPage";
import { GrDashboard } from "react-icons/gr";
import PrivateRoute from "./middleware/PrivateRoute";
import NewProduct from "./components/admin/ProductManager/NewProduct";
import EditProduct from "./components/admin/ProductManager/EditProduct";
import AdminOrders from "./pages/admin/AdminOrder";
import AdminReview from "./pages/admin/AdminReview";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "", element: <HomePage /> },
        { path: "about", element: <AboutPage /> },
        { path: "products", element: <ProductPage /> },
        { path: "products/:id", element: <DetailPage /> },
        { path: "news", element: <NewPage /> },
        { path: "cart", element: <CartPage /> },
        { path: "checkout", element: <CheckoutPage /> },
        { path: "my-orders", element: <OrderPage /> },
        { path: "my-orders/:id", element: <OrderDetailPage /> },
        { path: "todo", element: <Todo /> },
      ],
    },
    {
      path: "/admin",
      element: <PrivateRoute element={Admin} />,  
      children: [
        {path: "", element: <AdminDashboard />},
        { path: "dashboard", element: <AdminDashboard /> },
        { path: "users", element: <AdminUser /> },
        { path: "categories", element: <AdminCategory /> },
        { path: "products", element: <AdminProduct /> },
        { path: "products/new", element: <NewProduct /> },
        { path: "products/edit/:id", element: <EditProduct /> },
        { path: "orders", element: <AdminOrders />},
        { path: "reviews", element: <AdminReview />},
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "*", element: <PageNotFound /> },
  ]);

    
    

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

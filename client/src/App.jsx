import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/user/HomePage';
import AboutPage from './pages/user/AboutPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import UserHeader from './components/user/UserHeader';
import UserFooter from "./components/user/UserFooter";
import ProductPage from './pages/user/ProductPage';
import AdminUser from './pages/admin/AdminUser';
import AdminCategory from './pages/admin/AdminCategory';
import AdminProduct from './pages/admin/AdminProduct';
import AdminHeader from './layouts/admin/AdminHeader';

const App = () => {
  const location = useLocation();

  // Kiểm tra đường dẫn hiện tại để quyết định header nào hiển thị
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div>
      {isAdminRoute ? <AdminHeader /> : <UserHeader />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<AdminUser />}/>
        <Route path="/admin/categories" element={<AdminCategory />} />\
        <Route path="/admin/products" element={<AdminProduct />} />
      </Routes>
      {isAdminRoute ? '' : <UserFooter />}
    </div>
  );
}

export default App;

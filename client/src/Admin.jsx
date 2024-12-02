import React from 'react'
import { Outlet } from 'react-router-dom';
import AdminHeader from "./layouts/admin/AdminHeader";
import ScrollToTop from './ScrollToTop';

export default function Admin() {
  return (
    <>
    <AdminHeader />
    <ScrollToTop />
    <Outlet />
  </>
  )
}

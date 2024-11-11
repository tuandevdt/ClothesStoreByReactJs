import React from 'react'
import { Outlet } from 'react-router-dom';
import AdminHeader from "./layouts/admin/AdminHeader";

export default function Admin() {
  return (
    <>
    <AdminHeader />
    <Outlet />
  </>
  )
}

import React from 'react'
import { Outlet } from 'react-router-dom'
import UserHeader from "./layouts/user/UserHeader";
import UserFooter from "./layouts/user/UserFooter";
export default function Root() {
  return (
    <>
    <UserHeader />
    <Outlet />
    <UserFooter />
  </>
  )
}

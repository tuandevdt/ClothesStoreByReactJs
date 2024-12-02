import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import UserHeader from "./layouts/user/UserHeader";
import UserFooter from "./layouts/user/UserFooter";
import ScrollToTop from './ScrollToTop';
export default function Root() {

  return (
    <>
    <UserHeader />
    <ScrollToTop />
    <Outlet />
    <UserFooter />
  </>
  )
}

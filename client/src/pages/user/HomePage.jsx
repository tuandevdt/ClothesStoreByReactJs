import React from 'react'
import UserSlider from '../../components/user/home/UserSlider'
import FavoriteProducts from '../../components/user/home/FavoriteProducts'
import OfferHome from '../../components/user/home/OfferHome'
import OnTopHome from '../../components/user/home/OnTopHome'

export default function HomePage() {
  return (
    <div>
      <UserSlider />
      <FavoriteProducts />
      <OfferHome />
      <OnTopHome />
    </div>
  )
}

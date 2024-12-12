import React from "react";
import FirstDashboard from "../../components/admin/DashboardManager/FirstDashboard";
import ChartDashboard from "../../components/admin/DashboardManager/ChartDashboard";
import { useGetAllOrdersAdminsQuery, useGetProductsAdminQuery, useGetUsersQuery } from "../../redux/createAPI";


export default function AdminDashboard() {
  const {data: products} = useGetProductsAdminQuery({
    refetchOnMountOrArgChange: true,
  })
  const {data: users} = useGetUsersQuery({
    refetchOnMountOrArgChange: true,
  })
  const {data: orders} = useGetAllOrdersAdminsQuery({
    refetchOnMountOrArgChange: true,
}) 
  const userLength = users?.data.length;
  const orderLength = orders?.orders.length;
  const productLength = products?.data.length;

  return (
    <div
      id="main-content"
      className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
    >
      <main>
        <div className="pt-6 px-4">
          <FirstDashboard 
            userLength={userLength}
            orderLength={orderLength}
            productLength={productLength}
          />
          <ChartDashboard />
        </div>
      </main>
    </div>
  );
}

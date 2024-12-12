import React, { useState } from 'react';
import { useGetAllOrdersAdminsQuery } from '../../redux/createAPI';
import OrderTdItem from '../../components/admin/OrderManager/OrderTdItem';
import OrderDetailAdmin from '../../components/admin/OrderManager/OrderDetailAdmin';
import EditStatusOrderAdmin from '../../components/admin/OrderManager/EditStatusOrderAdmin';

const AdminOrders = () => {
    const {data, refetch} = useGetAllOrdersAdminsQuery({
        refetchOnMountOrArgChange: true,
    })
    const [selectedOrderId, setSelectedOrderId] = useState(null);
    const [editingOrderId, setEditingOrderId] = useState(null);

    const handleShowDetails = (id) => {
      setSelectedOrderId(id);
    };
  
    const handleEditStatus = (id) => {
        setEditingOrderId(id);
    };

    const handleCloseDetails = () => {
        setSelectedOrderId(null); 
        setEditingOrderId(null);
    };
  
    const orders = data?.orders;
    const listOrders = orders?.map((order) => (
        <OrderTdItem 
        key={order.id} 
        order={order} 
        refetch={refetch}
        onShowDetails={handleShowDetails}
        onEditStatus={handleEditStatus}
        />
      ))
    

  return (
    <div className="bg-gray-100 min-h-[90vh] lg:ml-64 p-4">
      <h1 className="text-2xl font-bold mb-4">Quản lý đơn hàng</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 text-left border-b">Khách hàng</th>
            <th className="py-2 px-4 border-b">Tổng tiền</th>
            <th className="py-2 px-4 border-b">Ngày đặt hàng</th>
            <th className="py-2 px-4 border-b">Trạng thái</th>
            <th className="py-2 px-4 border-b">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {listOrders}
        </tbody>
      </table>
      {selectedOrderId && 
      <OrderDetailAdmin 
      orderId={selectedOrderId}
      onClose={handleCloseDetails}
      />}
      {editingOrderId &&
                <EditStatusOrderAdmin
                    orderId={editingOrderId}
                    onClose={handleCloseDetails}
                    refetch={refetch}
                />}
    </div>
  );
};

export default AdminOrders;
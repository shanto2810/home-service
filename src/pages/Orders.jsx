import React, { useState } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([
    { id: 1, serviceName: 'Cleaning', status: 'Pending', orderDate: '2023-10-01', amount: 50 },
    { id: 2, serviceName: 'Plumbing', status: 'Pending', orderDate: '2023-10-02', amount: 70 },
    { id: 3, serviceName: 'Electrical', status: 'Pending', orderDate: '2023-10-03', amount: 60 },
  ]);

  const handleDeleteOrder = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  const handleConfirmOrder = (id) => {
    setOrders(orders.map(order => {
      if (order.id === id) {
        return { ...order, status: 'Confirmed' };
      }
      return order;
    }));
  };

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1 overflow-x-auto">
      <strong className="text-gray-700 font-medium">View Orders</strong>
      <div className="border-x border-gray-200 rounded-sm mt-3 overflow-x-auto">
        <table className="w-full min-w-max">
          <thead>
            <tr>
              <th className="py-2">Order ID</th>
              <th className="py-2">Service Name</th>
              <th className="py-2">Order Date</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Status</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td className="py-2">{order.id}</td>
                <td className="py-2">{order.serviceName}</td>
                <td className="py-2">{order.orderDate}</td>
                <td className="py-2">${order.amount}</td>
                <td className="py-2">{order.status}</td>
                <td className="py-2">
                  <button className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded font-bold mr-2" onClick={() => handleDeleteOrder(order.id)}>Delete</button>
                  {order.status === 'Pending' && (
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded" onClick={() => handleConfirmOrder(order.id)}>Confirm</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;

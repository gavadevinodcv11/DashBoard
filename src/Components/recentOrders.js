import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
function RecentOrders() {
  const orders = [
    {
      customer: "Wade Warren",
      orderNo: "15478256",
      amount: "$124.00",
      status: "Delivered",
    },
    {
      customer: "Jane Cooper",
      orderNo: "48965786",
      amount: "$305.02",
      status: "Delivered",
    },
    {
      customer: "Guy Hawkins",
      orderNo: "78995215",
      amount: "$45.88",
      status: "Canceled",
    },
    {
      customer: "Kristin Watson",
      orderNo: "20965732",
      amount: "$65.00",
      status: "Pending",
    },
    {
      customer: "Cody Fisher",
      orderNo: "95715620",
      amount: "$545.00",
      status: "Delivered",
    },
    {
      customer: "Savannah Nguyen",
      orderNo: "78514568",
      amount: "$128.20",
      status: "Delivered",
    },
  ];
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="text-lg font-medium mb-4">Recent Orders</h3>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Order No.</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <br></br>
        <tbody>
          {orders.map((order, idx) => (
            <tr key={idx}>
              <td className="flex flex-initial center">
                <IoPersonCircleSharp size={40} />
                &nbsp; &nbsp;
                {order.customer}
              </td>
              <td>{order.orderNo}</td>
              <td>{order.amount}</td>
              <td
                style={{
                  color: order.status === "Delivered" ? "green" : "red",
                }}
              >
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentOrders;

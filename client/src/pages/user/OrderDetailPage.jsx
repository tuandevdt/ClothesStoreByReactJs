import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetAllOrderItemsQuery } from '../../redux/createAPI';
import {formatCurrency} from "../../datatransfer/formatCurrency";
import {formatDate} from "../../datatransfer/formDate";

export default function OrderDetailPage() {
  const { id } = useParams(); 
  const parsedId = Number(id);
    
  const { data } = useGetAllOrderItemsQuery(parsedId);
  
  const orderItems = data?.data || [];
    const list = orderItems?.map(item => {
      return (
        <div key={item.id} className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
        <div className="pb-4 md:pb-8 w-full md:w-40">
          <img
            className="w-full hidden md:block"
            src={item.color.image}
            alt="dress"
          />
          <img
            className="w-full md:hidden"
            src="https://i.ibb.co/L039qbN/Rectangle-10.png"
            alt="dress"
          />
        </div>
        <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
          <div className="w-full flex flex-col justify-start items-start space-y-8">
            <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800 mr-4">
              {item.product.name}
            </h3>
            <div className="flex justify-start items-start flex-col space-y-2">
              <p className="text-sm dark:text-white leading-none text-gray-800">
                <span className="dark:text-gray-400 text-gray-300">
                  Style:{" "}
                </span>{" "}
                Italic Minimal Design
              </p>
              <p className="text-sm dark:text-white leading-none text-gray-800">
                <span className="dark:text-gray-400 text-gray-300">
                  Size:{" "}
                </span>{" "}
                {item.size.name}
              </p>
              <p className="text-sm dark:text-white leading-none text-gray-800">
                <span className="dark:text-gray-400 text-gray-300">
                  Color:{" "}
                </span>{" "}
                {item.color.name}
              </p>
            </div>
          </div>
          <div className="flex justify-between space-x-8 items-start w-full">
            <p className="text-base dark:text-white xl:text-lg leading-6">
              {formatCurrency(item.product.price)}
              <span className="text-red-300 line-through ml-2">{formatCurrency(item.product.price * 1.5)}</span>
            </p>
            <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">
              {item.quantity}
            </p>
            <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
              {formatCurrency(item.product.price * item.quantity)}
            </p>
          </div>
        </div>
      </div>
      )
    })

  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
  <div className="flex justify-start item-start space-y-2 flex-col">
    <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
      Order #FWB12736{orderItems.length > 0 && orderItems[0].orderId}
    </h1>
    <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">
    {orderItems.length > 0 && formatDate(orderItems[0].order.orderDate)}
    </p>
  </div>
  <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
    <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
      <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
        <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
          Chi tiết đơn hàng
        </p>
        {list}
      </div>
      <div className="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
        <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
          <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
            Summary
          </h3>
          <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
            <div className="flex justify-between w-full">
              <p className="text-base dark:text-white leading-4 text-gray-800">
                Subtotal
              </p>
              <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
              {orderItems.length > 0 && formatCurrency(orderItems[0].order.totalPrice)}
              </p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-base dark:text-white leading-4 text-gray-800">
                Discount{" "}
                <span className="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-gray-800 leading-3 text-gray-800">
                  STUDENT
                </span>
              </p>
              <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                -0đ (0%)
              </p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-base dark:text-white leading-4 text-gray-800">
                Shipping
              </p>
              <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                0đ
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">
              Total
            </p>
            <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">
            {orderItems.length > 0 && formatCurrency(orderItems[0].order.totalPrice)}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
          <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
            Shipping
          </h3>
          <div className="flex justify-between items-start w-full">
            <div className="flex justify-center items-center space-x-4">
              <div className="w-8 h-8">
                <img
                  className="w-full h-full"
                  alt="logo"
                  src="https://i.ibb.co/L8KSdNQ/image-3.png"
                />
              </div>
              <div className="flex flex-col justify-start items-center">
                <p className="text-lg leading-6 dark:text-white font-semibold text-gray-800">
                  DPD Delivery
                  <br />
                  <span className="font-normal">Delivery with 24 Hours</span>
                </p>
              </div>
            </div>
            <p className="text-lg font-semibold leading-6 dark:text-white text-gray-800">
              0đ
            </p>
          </div>
          <div className="w-full flex justify-center items-center">
            <button className="hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">
              View Carrier Details
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
      <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
        Thông tin khách hàng
      </h3>
      <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
        <div className="flex flex-col justify-start items-start flex-shrink-0">
          <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
            <img className='w-9 h-9 rounded-full shrink-0' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr3jhpAFYpzxx39DRuXIYxNPXc0zI5F6IiMQ&s" alt="avatar" />
            <div className="flex justify-start items-start flex-col space-y-2">
              <p className="text-base dark:text-white font-semibold leading-4 text-left text-gray-800">
              {orderItems.length > 0 && orderItems[0].order.fullname}
              </p>
              <p className="text-sm dark:text-gray-300 leading-5 text-gray-600">0
              {orderItems.length > 0 && orderItems[0].order.phone}
              </p>
            </div>
          </div>
          <div className="flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">

            <p className="cursor-pointer text-sm leading-5 font-bold">
            {orderItems.length > 0 && orderItems[0].order.status}
            </p>
          </div>
        </div>
        <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
          <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
            <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
              <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">
                Shipping Address
              </p>
              <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
              {orderItems.length > 0 && orderItems[0].order.address}
              </p>
            </div>
            <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
              <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">
                Billing Address
              </p>
              <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
              {orderItems.length > 0 && orderItems[0].order.address}
              </p>
            </div>
          </div>
          <div className="flex w-full justify-center items-center md:justify-start md:items-start">
            <button className="mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base font-medium leading-4 text-gray-800">
              Edit Details
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

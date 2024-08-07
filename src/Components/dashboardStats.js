import React from "react";
import {
  TbShoppingBagPlus,
  TbShoppingBagX,
  TbShoppingBagCheck,
} from "react-icons/tb";
import { FaSackDollar } from "react-icons/fa6";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import CircularProgressWithLabel from "./percentage";
function DashboardStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 flex">
        <div
          className={`p-4 bg-gray-800 rounded-lg text-left border-400 flex-initial flex-grow`}
        >
          <span>
            <TbShoppingBagPlus size={30} color="blue" />
          </span>
          <h3 className="text-lg font-small">Total Orders</h3>
          <p className="text-2xl font-bold flex justify-between py-3">
            75
            <span className={`text-sm text-400`}>
              <TiArrowSortedUp color="green" />
              3%
            </span>
          </p>
        </div>
        <div
          className={`p-4 bg-gray-800 rounded-lg text-left border-400 flex-initial flex-grow`}
        >
          <span>
            <TbShoppingBagCheck size={30} color="green" />
          </span>
          <h3 className="text-lg font-small">Total Delivered</h3>
          <p className="text-2xl font-bold flex justify-between py-3">
            70
            <span className={`text-sm text-400`}>
              <TiArrowSortedDown color="red" />
              3%
            </span>
          </p>
        </div>
        <div
          className={`p-4 bg-gray-800 rounded-lg text-left border-400 flex-initial flex-grow`}
        >
          <span>
            <TbShoppingBagX size={30} color="red" />
          </span>
          <h3 className="text-lg font-small">Total Canceled</h3>
          <p className="text-2xl font-bold flex justify-between py-3">
            5
            <span className={`text-sm text-400`}>
              <TiArrowSortedUp color="green" />
              3%
            </span>
          </p>
        </div>
        <div
          className={`p-4 bg-gray-800 rounded-lg text-left border-400 flex-initial flex-grow`}
        >
          <span>
            <FaSackDollar size={30} color="pink" />
          </span>
          <h3 className="text-lg font-small">Total Revenue</h3>
          <p className="text-2xl font-bold flex justify-between py-3">
            $12k
            <span className={`text-sm text-400`}>
              <TiArrowSortedDown color="red" />
              3%
            </span>
          </p>
        </div>
      </div>
      <div>
        <div
          className={`p-4 bg-gray-800 rounded-lg text-left border-400 flex-initial`}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-2 gap-4 mt-4 flex">
            <div className="p-4 bg-gray-800 rounded-lg text-left border-400 flex-initial flex-grow">
              <h3 className="text-lg font-small">Net Profit</h3>
              <p className="text-4xl font-bold">$6759.25</p>
              <p className={`text-sm text-400 flex`} color="green">
                <span>
                  <TiArrowSortedUp color="green" />
                </span>
                3%
              </p>
            </div>
            <div className="p-4 rounded-lg flex-initial flex-grow">
              <span className="justify-between py-3">
                <CircularProgressWithLabel/>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardStats;

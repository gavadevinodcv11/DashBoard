import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { GoGoal } from "react-icons/go";
import { BiDish } from "react-icons/bi";
import { MdFastfood } from "react-icons/md";
function Goals() {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="text-lg font-medium mb-4">Goals</h3>
      <ul>
        <li className="flex justify-between py-3">
          <span className="flex">
            <GoGoal size={50} color="red" />
            &nbsp; &nbsp; Goals
          </span>
          <span>
            <IoIosArrowForward />
          </span>
        </li>
        <li className="flex justify-between py-3">
          <span className="flex">
            <MdFastfood size={50} color="green" />
            &nbsp; &nbsp; Popular Dishes
          </span>
          <span>
            <IoIosArrowForward />
          </span>
        </li>
        <li className="flex justify-between py-3">
          <span className="flex">
            {" "}
            <BiDish size={50} color="blue" />
            &nbsp; &nbsp; Menus
          </span>
          <span>
            <IoIosArrowForward />
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Goals;

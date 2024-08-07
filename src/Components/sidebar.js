import React from 'react';
import { FaHome} from 'react-icons/fa';
import { BiBarChartSquare,BiTask } from "react-icons/bi";
import { CiWallet } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { GiComputerFan } from "react-icons/gi";
import { AiOutlineLogout } from "react-icons/ai";

function Sidebar() {
  return (
    <div className="w-20 bg-gray-800 p-4 flex flex-col items-center place-content-between">
      <div className="flex flex-col items-center space-y-10">
        <GiComputerFan size={40} color='blue'/>
        <FaHome size={24} color='blue'/>
        <BiBarChartSquare size={24} />
        <BiTask size={24} />
        <CiWallet size={24} />
        <IoBagCheckOutline size={24} />
      </div>
      <div>
      <AiOutlineLogout size={24}/>
      </div>
    </div>
  );
}

export default Sidebar;

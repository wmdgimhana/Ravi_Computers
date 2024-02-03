import React from "react";
import { FiPhone } from "react-icons/fi";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/* top */}
      <div className="Poppins bg-[#010000] md:px-[20px] px-[10px] py-[5px] text-white flex items-center justify-between">
        <div className="md:block hidden"></div>
        <div className="flex items-center gap-[10px]">
          <span className="md:text-[14px] text-[10px]">
            Summer Sale For All Computers And Free Express Delivery - OFF 50%!
          </span>
          <Link
            to={"/products/1"}
            className="font-[600] md:text-[14px] text-[10px] underline cursor-pointer hover:text-gray-100"
          >
            ShopNow{" "}
          </Link>
        </div>
        <div className="flex items-center gap-[5px]">
          <FiPhone className="md:text-[18px] text-[13px] font-[600]" />
          <span className="font-[600] md:text-[14px] text-[10px]">
            0765615685
          </span>
        </div>
      </div>
      {/* bottom */}
      <Navbar />
    </div>
  );
};

export default Header;

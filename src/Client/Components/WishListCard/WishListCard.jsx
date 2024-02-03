import React from "react";
import Argb from "../../../assets/argb.png";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";

const WishListCard = ({ items }) => {
  return (
    <div className="w-[270px] h-[322px] flex flex-col relative">
      {/* top */}
      <div className="flex items-center justify-between absolute w-[100%] p-[10px] ">
        {/* offer */}
        <div>
          <div className="py-[3px] px-[10px] text-[12px] flex items-center justify-center rounded-sm text-white bg-red-500 w-fit">
            <span>-{items.offer}%</span>
          </div>
        </div>

        {/* delete icon */}
        <div>
          <div className="bg-white p-[5px] flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-50">
            <RiDeleteBin5Line className="text-[20px]" />
          </div>
        </div>
      </div>

      {/* product image */}
      <div className="bg-gray-100 w-full h-[250px] flex justify-center items-center">
        <img src={items.productImg} alt="prImg" className="w-[180px] h-fit" />
      </div>

      {/* add to cart button */}
      <div>
        <div className="py-[10px] flex items-center gap-[10px] bg-black text-white text-[12px] justify-center hover:bg-black/90 cursor-pointer">
          <IoCartOutline className="text-[25px]" />
          <span>Add To Cart</span>
        </div>
      </div>

      {/* product name */}
      <div className="mt-[20px]">
        <span className="text-[16px] font-[500]">{items.productName}</span>
      </div>

      {/* price */}
      <div className="flex items-center gap-[10px] mt-[15px]">
        {/* new price */}
        <div>
          <span className="text-[16px] text-red-500 font-[500]">
            ${items.newPrice}
          </span>
        </div>

        {/* old price */}
        <div>
          <span
            className="text-[16px]  font-[500] text-gray-500"
            style={{ textDecoration: "line-through" }}
          >
            ${items.oldPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WishListCard;

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  // add to favourite icon
  const [favourite, setfavourite] = useState(false);

  return (
    <div className="w-[257px] h-[355px] flex flex-col relative hover:shadow-xl transition-shadow ">
      <div className="flex justify-between absolute p-[10px] items-center w-[100%]  ">
        <div className="Poppins p-[5px] px-[15px] h-fit flex justify-center items-center w-fit rounded-md bg-red-500 text-white">
          <span className="text-[12px]">-{item.offer}%</span>
        </div>

        <div>
          {favourite ? (
            <div
              className="bg-white p-[5px] rounded-full cursor-pointer hover:bg-gray-100"
              onClick={() => setfavourite(false)}
            >
              <IoMdHeart className="text-[25px] text-red-500  " />
            </div>
          ) : (
            <div
              className="bg-white p-[5px] rounded-full cursor-pointer hover:bg-gray-100"
              onClick={() => setfavourite(true)}
            >
              <IoMdHeartEmpty className="text-[25px]  " />
            </div>
          )}
        </div>
      </div>

      {/* product Img */}
      <div className="bg-gray-300 flex w-[100%] h-[270px]  p-[10px] justify-center items-center ">
        <img
          src={item.productImg}
          alt={item.productName}
          className="max-w-[175px] max-h-[165px] object-cover"
        />
      </div>

      {/* details */}
      <div className="flex flex-col gap-[5px] p-[5px]">
        {/* title */}
        <div>
          <Link to={`/product/${item.id}`}>
            <span className="font-[500] text-[16px] hover:underline cursor-pointer">
              {item.productName}{" "}
            </span>
          </Link>
        </div>

        {/* price */}
        <div className="flex items-center gap-[5px]">
          {/* now */}
          <div>
            <span className="text-[16px] font-[500] text-red-500">
              ${item.newPrice}
            </span>
          </div>

          {/* before */}
          <div>
            <span
              className="text-[16px] font-[500] text-gray-500"
              style={{ textDecoration: "line-through" }}
            >
              ${item.oldPrice}
            </span>
          </div>
        </div>

        {/* ratings */}
        <div className="flex items-center gap-[10px]">
          <div className="text-[#FFAD33] flex items-center text-[20px] gap-[5px]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          {/* star count */}
          <span className="font-[500] text-gray-500">({item.rating})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

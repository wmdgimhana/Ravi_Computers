import React from "react";
import { HiMiniArrowLongLeft } from "react-icons/hi2";
import LCD from "../../../assets/lcd.png";
import { InputNumber } from "antd";
import { RiDeleteBin5Line } from "react-icons/ri";
import { cItems } from "./CartItems";
import BrowsByCategory from "../../Components/BrowsByCategory/BrowsByCategory";
import Section7 from "../Home/Section7/Section7";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ShoppingCart = () => {
  return (
    <div className="md:px-[100px] px-[25px] mt-[50px]">
      {/* title */}
      <div className="flex flex-col md:items-start items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="md:text-[35px] text-[25px] font-[700]">
            Shopping Cart
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-[5px] cursor-pointer w-fit md:ml-[100px]"
        >
          <HiMiniArrowLongLeft className="text-[30px] text-red-500" />
          <Link
            to={"/products/1"}
            className="text-[20px] font-[400] cursor-pointer hover:text-black/90"
          >
            Continue Shopping
          </Link>
        </motion.div>
      </div>

      {/* cart details */}
      <div className="mt-[100px] overflow-x-scroll  flex flex-col gap-[20px] mb-[100px]">
        {/* title bar */}
        <div className="flex md:gap-[200px] gap-[50px] p-[20px] border-gray-100 border-solid border-[1px] shadow-xl rounded-md">
          <div className="w-[300px] flex justify-center items-center">
            <span className="font-[400]">Product</span>
          </div>
          <div className="w-[300px] flex justify-center items-center">
            <span className="font-[400]">Price</span>
          </div>
          <div className="w-[300px] flex justify-center items-center">
            <span className="font-[400]">Quantity</span>
          </div>
          <div className="w-[300px] flex justify-center items-center">
            <span className="font-[400]">Subtotal</span>
          </div>
          <div className="w-[300px] text-center flex justify-center items-center">
            <span className="font-[400]">Delete Item</span>
          </div>
        </div>

        {/* cart items */}
        {cItems.map((item) => (
          <div
            className="flex md:gap-[200px] gap-[50px] p-[20px] border-gray-100 border-solid border-[1px] shadow-xl rounded-md items-center"
            key={item.id}
          >
            {/* product details */}
            <div className="flex flex-col justify-center items-center gap-[5px] w-[300px]">
              {/* product image */}
              <div>
                <img
                  src={item.productImg}
                  alt="productImg"
                  className="w-[50px]  h-[50px]"
                />
              </div>
              {/* product name */}
              <div className="text-center">
                <span>{item.productName}</span>
              </div>
            </div>

            {/* price */}
            <div className="w-[300px] flex justify-center items-center">
              <div>
                <span>${item.price}</span>
              </div>
            </div>

            {/* quentity */}
            <div className="w-[300px] flex justify-center items-center">
              <InputNumber min={1} max={10} defaultValue={1} />
            </div>

            {/* subtotal */}
            <div className="w-[300px] flex justify-center items-center">
              <span>$650</span>
            </div>

            {/* delete icon */}
            <div className="w-[300px] flex justify-center items-center">
              <RiDeleteBin5Line className="text-[20px] cursor-pointer" />
            </div>
          </div>
        ))}
      </div>

      {/* buttons */}
      <div className="flex flex-col md:flex-row gap-[10px] items-center justify-between mb-[100px]">
        {/* return to shop */}
        <div className="md:p-[15px] p-[7px] md:px-[30px] px-[20px] border-red-500 border-solid border-[1px] rounded-md cursor-pointer hover:bg-red-100 ">
          <span className="text-[16px] font-[500]">Return To Shop</span>
        </div>

        {/* Update Cart */}
        <div className="md:p-[15px] p-[7px] md:px-[30px] px-[20px] border-red-500 border-solid border-[1px] rounded-md cursor-pointer hover:bg-red-100 ">
          <span className="text-[16px] font-[500]">Update Cart</span>
        </div>
      </div>

      {/* cart total */}
      <div className="flex md:flex-row gap-[25px] flex-col md:justify-between mb-[100px]">
        {/* Coupon Code */}
        <div>
          <div className="flex md:flex-row flex-col items-center gap-[10px]">
            <input
              type="text"
              placeholder="Coupon Code"
              className="p-[15px] border-red-500 outline-none border-solid border-[1px] rounded-md"
            />
            <button className="bg-red-500 text-white p-[15px] px-[30px]  hover:bg-red-600 cursor-pointer rounded-md">
              Apply Coupon
            </button>
          </div>
        </div>

        {/* Cart Total */}
        <div className="flex flex-col md:w-[400px] border-solid border-red-500 border-[1px] rounded-md p-[25px]">
          {/* title */}
          <div>
            <span className="text-[20px] font-[500]">Cart Total</span>
          </div>

          <div className="flex flex-col gap-[10px] mt-[10px]">
            {/* subtotal */}
            <div className="flex items-center justify-between border-solid border-gray-500 border-b-[1px] pb-[10px]">
              <div>
                <span className="text-[16px] font-[400]">Subtotal:</span>
              </div>

              <div>
                <span className="text-[16px] font-[400]">$1750</span>
              </div>
            </div>

            {/* Shipping */}
            <div className="flex items-center justify-between border-solid border-gray-500 border-b-[1px] pb-[10px]">
              <div>
                <span className="text-[16px] font-[400]">Shipping:</span>
              </div>

              <div>
                <span className="text-[16px] font-[400]">Free</span>
              </div>
            </div>

            {/* total */}
            <div className="flex items-center justify-between border-solid border-gray-500 border-b-[1px] pb-[10px]">
              <div>
                <span className="text-[16px] font-[400]">Total:</span>
              </div>

              <div>
                <span className="text-[16px] font-[400]">$1750</span>
              </div>
            </div>

            {/* button */}
            <div>
              <Link to={"/checkout"}>
                <div className="p-[15px] mt-[25px] md:px-[30px] bg-red-500 text-white flex justify-center items-center hover:bg-red-600 rounded-md cursor-pointer text-center">
                  <span>Procees to checkout</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <BrowsByCategory />
      </div>

      <div className="mb-[50px]">
        <Section7 />
      </div>
    </div>
  );
};

export default ShoppingCart;

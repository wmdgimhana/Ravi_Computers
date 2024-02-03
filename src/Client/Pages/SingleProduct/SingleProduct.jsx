import React, { useState } from "react";
import Pr1 from "../../../assets/pr1.png";
import Pr2 from "../../../assets/pr2.png";
import Pr3 from "../../../assets/pr3.png";
import Pr4 from "../../../assets/pr4.png";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { TfiReload } from "react-icons/tfi";
import Reviews from "./Reviews";
import RelatedItems from "./RelatedItems";
import { Modal } from "antd";
import { Link } from "react-router-dom";

const SingleProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const Images = [Pr1, Pr2, Pr3, Pr4];

  const [selectedImage, setSelectedImage] = useState(0);

  const [inStock, setInStock] = useState(true);

  const [selectedColor, setSelectedColor] = useState(null);

  const [quantity, setQuantity] = useState(1);

  const [availablity, setAvailablity] = useState(20);

  const [favourite, setFavourite] = useState(false);

  return (
    <div className="mt-[100px] md:px-[50px] px-[25px] mb-[100px]">
      {/* roadmap */}
      <div className="flex items-center gap-[5px] pb-[50px]">
        <div className="opacity-50 cursor-pointer hover:opacity-60 text-sm font-['Poppins'] leading-[21px] ">
          Account
        </div>
        <span className="opacity-50">/</span>
        <div
          id="NothingRoot"
          className="opacity-50 text-sm font-['Poppins'] cursor-pointer hover:opacity-60 leading-[21px] "
        >
          Gaming
        </div>
        <span className="opacity-50">/</span>
        <div
          id="NothingRoot"
          className="text-sm font-['Poppins'] leading-[21px] cursor-pointer hover:opacity-100 "
        >
          <span>Havic HV G-92 Gamepad</span>
        </div>
      </div>

      {/* product */}
      <div className="flex md:flex-row flex-col gap-[50px]  ">
        {/* product images */}
        <div className="flex  md:flex-row flex-col-reverse flex-[1]  ">
          {/* left */}
          <div className="flex md:flex-col flex-row mt-[20px] md:mt-0  md:justify-between  gap-[20px] md:gap-0 flex-[1]">
            <div
              className="md:w-[130px] md:h-[130px] w-[100px] h-[100px] bg-gray-100 cursor-pointer hover:bg-gray-200 flex justify-center items-center"
              onClick={() => setSelectedImage(0)}
            >
              <img
                src={Images[0]}
                alt="pr"
                className="object-cover p-[10px] w-[100%]"
              />
            </div>
            <div
              className="md:w-[130px] md:h-[130px] w-[100px] h-[100px] bg-gray-100 cursor-pointer hover:bg-gray-200 flex justify-center items-center"
              onClick={() => setSelectedImage(1)}
            >
              <img
                src={[Images[1]]}
                alt="pr"
                className="object-cover p-[10px] w-[100%]"
              />
            </div>
            <div
              className="md:w-[130px] md:h-[130px] w-[100px] h-[100px] bg-gray-100 cursor-pointer hover:bg-gray-200 flex justify-center items-center"
              onClick={() => setSelectedImage(2)}
            >
              <img
                src={Images[2]}
                alt="pr"
                className="object-cover p-[10px] w-[100%]"
              />
            </div>
            <div
              className="md:w-[130px] md:h-[130px] w-[100px] h-[100px] bg-gray-100 cursor-pointer hover:bg-gray-200 flex justify-center items-center"
              onClick={() => setSelectedImage(3)}
            >
              <img
                src={Images[3]}
                alt="pr"
                className="object-cover p-[10px] w-[100%]"
              />
            </div>
          </div>
          {/* right */}
          <div className="flex-[3] ">
            <div className="bg-[#f5f5f5] flex flex-row justify-center  w-full h-full   items-center">
              <img
                src={Images[selectedImage]}
                alt="Image1"
                id="Image1"
                className=" object-cover max-w-[400px] "
              />
            </div>
          </div>
        </div>

        {/* product details */}
        <div className="flex-[1]">
          {/* top */}
          <div className="mb-[25px]">
            {/* product name */}
            <div>
              <div className="text-2xl font-['Inter'] font-semibold tracking-[0.72] leading-[24px] Poppins">
                Havic HV G-92 Gamepad
              </div>
            </div>

            {/* ratings | stock ? */}
            <div className="flex items-center gap-[10px] mt-[20px]">
              <div className="flex items-center gap-[10px]">
                {/* stars */}
                <div className="flex items-center text-[#FFAD33] gap-[5px]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar className="text-gray-400/60" />
                </div>
                {/* rating count */}
                <div className="text-gray-500/90">
                  <span>(345 Reviews)</span>
                </div>
              </div>

              {/* divider */}
              <div>
                <span>|</span>
              </div>
              {/* stock ? */}
              <div>
                {inStock ? (
                  <span className="text-green-500">In Stock</span>
                ) : (
                  <span className="text-red-500">Sold Out</span>
                )}
              </div>
            </div>

            {/* price */}
            <div className="mt-[15px]">
              <span className="text-[24px] font-[400]">$192.00</span>
            </div>

            {/* description */}
            <div className="mt-[15px]">
              <span className="text-[14px] font-[400]">
                PlayStation 5 Controller Skin High quality vinyl with air
                channel adhesive for easy bubble free install & mess free
                removal Pressure sensitive.
              </span>
            </div>
          </div>

          {/* bottom */}
          <div className="border-solid border-t-black/30 border-t-[1px]">
            {/* buy */}
            <div className="mt-[20px] flex-col md:flex-row flex items-center gap-[25px]">
              <div className="flex items-center border-black/30 border-solid border-[1px] w-fit font-[600] rounded-md overflow-hidden">
                <button
                  className="px-[15px] py-[10px] border-r-[1px] border-black/30 border-solid bg-white hover:bg-gray-200 "
                  onClick={() =>
                    setQuantity(quantity !== 1 ? quantity - 1 : quantity)
                  }
                >
                  -
                </button>
                <div className="px-[30px] flex items-center justify-center">
                  <span>{quantity}</span>
                </div>
                <button
                  className="px-[15px] border-l-[1px] py-[10px] border-black/30 border-solid  bg-red-500 text-white hover:bg-red-600 "
                  onClick={() =>
                    setQuantity(
                      quantity < availablity ? quantity + 1 : quantity
                    )
                  }
                >
                  +
                </button>
              </div>

              {/* buy button */}
              <div>
                <Link to={"/checkout"}>
                  <div className="bg-red-500 cursor-pointer hover:bg-red-600 text-white text-[16px] py-[10px] px-[50px] rounded-md">
                    Buy Now
                  </div>
                </Link>
              </div>

              {/* fav icon */}
              {favourite ? (
                <div
                  className="p-[7px] bg-red-500 text-white border-solid border-red-500 border-[1px] rounded-md cursor-pointer hover:bg-red-600/90"
                  onClick={() => setFavourite(false)}
                >
                  <FaRegHeart className="text-[25px]" />
                </div>
              ) : (
                <div className="p-[7px] border-solid border-black/30 border-[1px] rounded-md cursor-pointer hover:bg-gray-200">
                  <FaRegHeart
                    className="text-[25px]"
                    onClick={() => setFavourite(true)}
                  />
                </div>
              )}
            </div>

            {/* delivery */}
            <div className="mt-[50px] border-black/50 border-solid border-[1px] rounded-md w-fit">
              {/* free delivery */}
              <div className="flex items-center p-[20px] gap-[10px]">
                <div>
                  <TbTruckDelivery className="text-red-500 text-[40px]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[16px] font-[600]">Free Delivery</span>
                  <span
                    className="text-[12px] underline font-[500] cursor-pointer text-black/90 hover:text-black"
                    onClick={showModal}
                  >
                    Enter your postal code for Delivery Availability
                  </span>

                  <Modal
                    title="Enter your Postal Code"
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={null}
                    width={400}
                  >
                    <div className="flex justify-center mt-[25px] mb-[25px] items-center gap-[20px]">
                      <div>
                        <input
                          type="text"
                          className="outline-none border-none bg-gray-200 p-[7px] rounded-md"
                        />
                      </div>

                      <div>
                        <div className="bg-red-500 text-white p-[7px] cursor-pointer hover:bg-red-600 rounded-md px-[20px]">
                          <span>Check</span>
                        </div>
                      </div>
                    </div>
                  </Modal>
                </div>
              </div>

              {/* Return delivery */}
              <div className="flex items-center p-[20px] gap-[10px] border-t-[1px] border-solid border-black/50">
                <div>
                  <TfiReload className="text-red-500 text-[35px]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[16px] font-[600]">
                    Return Delivery
                  </span>
                  <span className="text-[12px] font-[500] ">
                    Free 30 Days Delivery Returns.{" "}
                    <Link
                      to={"/terms-of-use"}
                      className="underline font-[500] cursor-pointer text-black/90 hover:text-black"
                    >
                      Details
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* reviews */}
      <div>
        <Reviews />
      </div>

      {/* related items */}
      <div className="mt-[100px]">
        <div className="flex items-center gap-[10px]">
          <div className="h-[25px] w-[15px] bg-[#DB4444] rounded-sm"></div>
          <span className="Poppins text-red-500 font-[600]">Today’s</span>
        </div>

        {/* items */}
        <div className="mt-[50px]">
          <RelatedItems />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

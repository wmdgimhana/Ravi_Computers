import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import ReviewCard from "./ReviewCard";
import { ReviewData } from "./ReviewsData";
import { Modal } from "antd";
import { Rate } from "antd";

const Reviews = () => {
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

  return (
    <div className="mt-[150px]">
      {/* reviews count */}
      <div className="flex items-center justify-center gap-[10px]">
        <div>
          <span className="text-[50px] font-[700]">4.0</span>
        </div>
        <div>
          <div className="flex text-[#FFAD33] items-center gap-[5px]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar className="text-gray-400/60" />
          </div>
          <span className="text-[18px] text-gray-500 font-[600]">
            From 345 reviews{" "}
          </span>
        </div>
      </div>

      {/* top */}
      <div className="flex md:justify-between md:flex-row flex-col">
        <div>
          <span className="text-[23px] font-[600] border-red-500 border-solid border-b-[1px]">
            Reviews(345)
          </span>
        </div>
        <div className="flex md:flex-row flex-col mt-[20px] md:mt-0 items-center gap-[20px]">
          <div>
            <div className="flex items-center border-red-500 border-solid border-[1px] rounded-md p-[5px]">
              <input
                type="text"
                placeholder="Search"
                className="outline-none border-none"
              />
              <FaSearch />
            </div>
          </div>
          <div>
            <div
              className="bg-red-500 text-white font-[500] p-[5px] px-[15px] rounded-md hover:bg-red-600 cursor-pointer"
              onClick={showModal}
            >
              <span>+ Write Review</span>
            </div>
            <Modal
              title="Write Review"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={null}
            >
              <div>
                <textarea
                  name="msg"
                  id="msg"
                  cols="30"
                  rows="10"
                  placeholder="your comment here"
                  className="resize-none bg-gray-200 p-[10px] rounded-md w-[100%] outline-none"
                ></textarea>
                <div className="mt-[10px]">
                  <Rate allowHalf defaultValue={2.5} />
                </div>
                <div>
                  <div className="bg-red-500 p-[7px] text-white px-[40px] rounded-md hover:bg-red-600 w-fit cursor-pointer mt-[25px]">
                    <span>Submit</span>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>

      {/* reviews */}
      <div className="mt-[50px] flex justify-center">
        <div className="md:grid grid-cols-3 md:gap-y-[30px] md:gap-x-[30px] flex flex-wrap gap-[30px]">
          {ReviewData.map((item) => (
            <ReviewCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;

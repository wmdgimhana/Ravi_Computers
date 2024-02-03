import React from "react";
import WishListCard from "../../Components/WishListCard/WishListCard";
import { wishItems } from "../../Components/WishListCard/WishListItems";
import RelatedItems from "../SingleProduct/RelatedItems";
import BrowsByCategory from "../../Components/BrowsByCategory/BrowsByCategory";

const Wishlist = () => {
  return (
    <div className="md:px-[100px] px-[25px] mt-[100px]">
      {/* top */}
      <div className="flex items-center justify-between mb-[50px]">
        {/* items count */}
        <div>
          <span className="text-[20px] font-[400]">Wishlist (4)</span>
        </div>

        {/* button */}
        <div>
          <div className="md:py-[15px] py-[10px] md:px-[30px] px-[25px] border-solid w-fit flex justify-center items-center cursor-pointer hover:bg-gray-100 border-[1px] border-black rounded-md">
            <span className="text-[16px] font-[500]">Move All To Cart</span>
          </div>
        </div>
      </div>

      {/* products */}
      <div className="flex md:gap-[20px] gap-[40px] md:flex-row flex-col items-center justify-center">
        {wishItems.map((item) => (
          <WishListCard items={item} key={item.id} />
        ))}
      </div>

      {/* just for you */}
      <div className="mt-[100px]">
        {/* top */}
        <div className="flex items-center justify-between">
          {/* title */}
          <div className="flex items-center gap-[10px] mb-[50px]">
            <div className="h-[25px] w-[15px] bg-[#DB4444] rounded-sm"></div>
            <span className="Poppins text-red-500 font-[600]">
              Just For You
            </span>
          </div>

          {/* button */}
          <div>
            <div className="md:py-[15px] py-[10px] md:px-[30px] px-[25px] border-solid w-fit flex justify-center items-center cursor-pointer hover:bg-gray-100 border-[1px] border-black rounded-md">
              <span className="text-[16px] font-[500]">See All</span>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="mt-[50px]">
          <RelatedItems />
        </div>
      </div>

      {/* categories */}
      <div>
        <BrowsByCategory />
      </div>
    </div>
  );
};

export default Wishlist;

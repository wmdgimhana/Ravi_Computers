import React from "react";
import { HiMiniArrowLongLeft } from "react-icons/hi2";
import { Radio } from "antd";
import Controller from "../../../assets/joy.png";
import pay1 from "../../../assets/Bkash.png";
import pay2 from "../../../assets/Visa.png";
import pay3 from "../../../assets/Mastercard.png";
import pay4 from "../../../assets/Nagad.png";
import BrowsByCategory from "../../Components/BrowsByCategory/BrowsByCategory";
import Section7 from "../Home/Section7/Section7";

const Checkout = () => {
  return (
    <div className="px-[100px] mt-[50px]">
      {/* title */}
      <div className="flex flex-col mb-[100px]">
        <div>
          <span className="text-[35px] font-[700]">Check Out</span>
        </div>
        <div className="flex items-center gap-[5px] cursor-pointer w-fit ml-[100px]">
          <HiMiniArrowLongLeft className="text-[30px] text-red-500" />
          <span className="text-[20px] font-[400] cursor-pointer hover:text-black/90">
            continue shopping
          </span>
        </div>
      </div>

      {/* billing details */}
      <div className="mb-[100px]">
        {/* title */}
        <div>
          <span className="text-[36px] font-[500]">Billing Details</span>
        </div>

        {/* Mr | Ms */}
        <div className="mb-[25px] mt-[25px]">
          <Radio.Group defaultValue="mr" buttonStyle="solid">
            <Radio.Button value="mr">Mr.</Radio.Button>
            <Radio.Button value="mrs">Mrs.</Radio.Button>
          </Radio.Group>
        </div>

        {/* form */}
        <div className="flex gap-[100px]">
          {/* left */}
          <div className="flex-[1] flex flex-col gap-[25px]">
            <div className="flex flex-col gap-[5px]">
              <span className="text-[16px] font-[400] text-gray-500">
                First Name <span className="text-red-500">*</span>
              </span>
              <input
                type="text"
                className="p-[10px] bg-gray-200 rounded-md outline-none"
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <span className="text-[16px] font-[400] text-gray-500">
                Last Name
              </span>
              <input
                type="text"
                className="p-[10px] bg-gray-200 rounded-md outline-none"
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <span className="text-[16px] font-[400] text-gray-500">
                Street Address <span>*</span>
              </span>
              <input
                type="text"
                className="p-[10px] bg-gray-200 rounded-md outline-none"
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <span className="text-[16px] font-[400] text-gray-500">
                Apartment, floor, etc. (optional)
              </span>
              <input
                type="text"
                className="p-[10px] bg-gray-200 rounded-md outline-none"
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <span className="text-[16px] font-[400] text-gray-500">
                Town/City <span className="text-red-500">*</span>
              </span>
              <input
                type="text"
                className="p-[10px] bg-gray-200 rounded-md outline-none"
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <span className="text-[16px] font-[400] text-gray-500">
                Phone Number <span className="text-red-500">*</span>
              </span>
              <input
                type="text"
                className="p-[10px] bg-gray-200 rounded-md outline-none"
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <span className="text-[16px] font-[400] text-gray-500">
                Email Address <span className="text-red-500">*</span>
              </span>
              <input
                type="email"
                className="p-[10px] bg-gray-200 rounded-md outline-none"
              />
            </div>
            <div className="flex items-center gap-[20px]">
              <input type="checkbox" id="accept" className="accent-red-500" />
              <label htmlFor="accept" className="cursor-pointer">
                <span className="text-[16px] font-[600] hover:text-black/90">
                  Save this information for faster check-out next time
                </span>
              </label>
            </div>
          </div>
          {/* right */}
          <div className="flex-[1]">
            <div>
              {/* items  */}

              <div className="flex flex-col gap-[30px]">
                {/* item */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-[20px]">
                    <div>
                      <img
                        src={Controller}
                        alt="controller"
                        className="w-[50px] h-[50px]"
                      />
                    </div>
                    <div>
                      <span className="text-[16px] font-[400]">Joystick</span>
                    </div>
                  </div>

                  {/* price */}
                  <div>
                    <span className="font-[400]">$650</span>
                  </div>
                </div>

                {/* item */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-[20px]">
                    <div>
                      <img
                        src={Controller}
                        alt="controller"
                        className="w-[50px] h-[50px]"
                      />
                    </div>
                    <div>
                      <span className="text-[16px] font-[400]">
                        LCD Monitor
                      </span>
                    </div>
                  </div>

                  {/* price */}
                  <div>
                    <span className="font-[400]">$650</span>
                  </div>
                </div>
              </div>

              <div className="mt-[30px] flex flex-col gap-[25px]">
                {/* sub total */}
                <div className="flex justify-between items-center border-black/30 border-solid border-b-[1px] pb-[10px] ">
                  <div>
                    <span>Subtotal:</span>
                  </div>

                  <div>
                    <span>$1750</span>
                  </div>
                </div>

                {/* shipping */}
                <div className="flex justify-between items-center border-black/30 border-solid border-b-[1px] pb-[10px] ">
                  <div>
                    <span>Shipping:</span>
                  </div>

                  <div>
                    <span>Free</span>
                  </div>
                </div>

                {/* total */}
                <div className="flex justify-between items-center border-black/30 border-solid border-b-[1px] pb-[10px] ">
                  <div>
                    <span>Total:</span>
                  </div>

                  <div>
                    <span>$1750</span>
                  </div>
                </div>
              </div>

              {/* payment */}
              <div className="mt-[30px] flex flex-col gap-[10px]">
                {/* bank */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[10px]">
                    <input
                      type="radio"
                      id="bank"
                      name="payment"
                      className="accent-black"
                    />
                    <label htmlFor="bank" className="cursor-pointer">
                      <span className="text-[16px] font-[400]">Bank</span>
                    </label>
                  </div>

                  <div>
                    <div className="flex items-center gap-[10px]">
                      <img src={pay1} alt="payment" />
                      <img src={pay2} alt="payment" />
                      <img src={pay3} alt="payment" />
                      <img src={pay4} alt="payment" />
                    </div>
                  </div>
                </div>

                {/* cash on delivery */}
                <div className="flex items-center gap-[10px]">
                  <input
                    type="radio"
                    id="cash"
                    name="payment"
                    className="accent-black"
                  />
                  <label htmlFor="cash" className="cursor-pointer">
                    <span className="text-[16px] font-[400]">
                      Cash on Delivery
                    </span>
                  </label>
                </div>
              </div>

              {/* coupon code */}
              <div className="mt-[25px] ">
                <div className="flex items-center gap-[20px]">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className="border-solid border-black/90 border-[1px] py-[10px] px-[15px] rounded-md outline-none"
                  />
                  <button className="py-[10px] rounded-md px-[25px] bg-red-500 text-white hover:bg-red-600">
                    Apply Coupon
                  </button>
                </div>
              </div>

              {/* order button */}
              <div className="mt-[25px]">
                <div>
                  <button className="py-[10px] rounded-md px-[25px] bg-red-500 text-white hover:bg-red-600">
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* brows by category */}
      <div>
        <BrowsByCategory />
      </div>

      <div>
        <Section7 />
      </div>
    </div>
  );
};

export default Checkout;

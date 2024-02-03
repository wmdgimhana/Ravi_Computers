import React from "react";
import { LuSendHorizonal } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="md:px-[100px] px-[25px] bg-black text-white pt-[60px] ">
      <div className="flex flex-wrap justify-between gap-[50px] md:gap-0 ">
        <div className="flex flex-col gap-[20px]">
          <div>
            <span className="text-[24px] font-[700]">Exclusive</span>
          </div>

          <div>
            <span className="text-[20px] font-[500]">Subscribe</span>
          </div>

          <div>
            <span className="text-[16px] font-[400]">
              Get 10% off your first order
            </span>
          </div>

          <div>
            <div className="flex items-center gap-[10px] border-white border-solid border-[1px] w-fit p-[10px] rounded-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="outline-none bg-transparent text-white"
              />
              <LuSendHorizonal className="text-white text-[25px] cursor-pointer" />
            </div>
          </div>
        </div>

        {/* item 2 */}
        <div className="flex flex-col gap-[20px]">
          {/* title */}
          <div>
            <span className="text-[20px] font-[500]">Support</span>
          </div>

          {/* address */}
          <div>
            <span>
              111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
            </span>
          </div>

          {/* email */}
          <div>
            <span>exclusive@gmail.com</span>
          </div>

          {/* phone number */}
          <div>
            <span>+88015-88888-9999</span>
          </div>
        </div>

        {/* item 3 */}
        <div className="flex flex-col gap-[20px]">
          {/* title */}
          <div>
            <span className="text-[20px] font-[500]">Account</span>
          </div>

          {/* links */}
          <div className="flex flex-col gap-[10px]">
            <Link
              to={"/shopping-cart"}
              className="text-[16px] font-[400px] link"
            >
              Cart
            </Link>
            <Link to={"/wishlist"} className="text-[16px] font-[400px] link">
              Wishlist
            </Link>
            <Link to={"/products/1"} className="text-[16px] font-[400px] link">
              Shop
            </Link>
          </div>
        </div>

        {/* item 3 */}
        <div className="flex flex-col gap-[20px]">
          {/* title */}
          <div>
            <span className="text-[20px] font-[500]">Quick Link</span>
          </div>

          {/* links */}
          <div className="flex flex-col gap-[10px]">
            <Link
              to={"/privacy-policy"}
              className="text-[16px] font-[400px] link"
            >
              Privacy Policy
            </Link>
            <Link
              to={"/terms-of-use"}
              className="text-[16px] font-[400px] link"
            >
              Terms Of Use
            </Link>

            <Link to={"/contact"} className="text-[16px] font-[400px] link">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          {/* title */}
          <div>
            <span className="text-[20px] font-[500]">Connect with us</span>
          </div>

          <div className="flex text-[20px] gap-[25px]">
            <div className="cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="cursor-pointer">
              <FiTwitter />
            </div>
            <div className="cursor-pointer">
              <FaInstagram />
            </div>

            <div className="cursor-pointer">
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="flex items-center justify-center mt-[50px] py-[20px] border-gray-400 border-solid border-t-[1px]">
        <div className="text-gray-400">
          <span>&copy;</span>
          <span>Copyright cyber pixel 2023. All right reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

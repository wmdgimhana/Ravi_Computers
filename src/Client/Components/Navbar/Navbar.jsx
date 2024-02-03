import React from "react";
import { IoMdSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  // mobile menu open
  const [menu, setMenu] = useState(false);

  return (
    <div className="flex items-center justify-between px-[30px] py-[10px] bg-gradient-to-b from-red-800 via-red-400 to-white relative ">
      {/* logo */}
      <div>
        <Link to={"/"}>
          <span className="Poppins text-white text-[16px] font-[400] cursor-pointer">
            LOGO
          </span>
        </Link>
      </div>

      {/* Nav items */}
      <div className="md:flex hidden items-center gap-[50px]">
        {/* Nav Links */}
        <div className="flex items-center gap-[15px] Poppins text-[16px] font-[400]">
          <NavLink to={"/"} className=" cursor-pointer link">
            Home
          </NavLink>
          <NavLink to={"/about"} className="cursor-pointer link">
            About
          </NavLink>
          <NavLink to={"/products/1"} className="cursor-pointer link">
            Products
          </NavLink>
          <NavLink to={"/contact"} className="cursor-pointer link">
            Contact
          </NavLink>
        </div>

        {/* Search box */}
        <div className="flex items-center gap-[5px] border-black border-solid border-[1px] rounded-md py-[10px] px-[10px] w-[250px] justify-between">
          <span className="text-[12px] w-[100%] font-[400]">
            <input
              type="text"
              placeholder=" What are you looking for"
              className="bg-transparent w-[100%] outline-none border-none placeholder:text-black"
            />
          </span>

          <span>
            <IoMdSearch />
          </span>
        </div>
      </div>

      {/* mobile menu */}
      {menu && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex md:hidden bg-red-600 text-white flex-col w-[100vw] h-[100vh] top-[100%] left-0 right-0 z-[50000] justify-center  absolute items-center gap-[50px]"
        >
          {/* Nav Links */}
          <div className="flex flex-col items-center gap-[15px] Poppins text-[20px] font-[400]">
            <NavLink
              to={"/"}
              className=" cursor-pointer link"
              onClick={() => setMenu(false)}
            >
              Home
            </NavLink>
            <NavLink
              to={"/about"}
              className="cursor-pointer link"
              onClick={() => setMenu(false)}
            >
              About
            </NavLink>
            <NavLink
              to={"/products/1"}
              className="cursor-pointer link"
              onClick={() => setMenu(false)}
            >
              Products
            </NavLink>
            <NavLink
              to={"/contact"}
              className="cursor-pointer link"
              onClick={() => setMenu(false)}
            >
              Contact
            </NavLink>
          </div>

          {/* Search box */}
          <div className="flex items-center gap-[5px] border-black border-solid border-[1px] rounded-md py-[10px] px-[10px] w-[250px] justify-between">
            <span className="text-[15px] w-[100%] font-[400]">
              <input
                type="text"
                placeholder=" What are you looking for"
                className="bg-transparent w-[100%] outline-none border-none placeholder:text-black"
              />
            </span>

            <span>
              <IoMdSearch />
            </span>
          </div>
        </motion.div>
      )}

      {/* icons */}
      <div className="flex gap-[10px]">
        <Link to={"/wishlist"}>
          <IoIosHeartEmpty className="text-[30px] text-white cursor-pointer hover:text-gray-100" />
        </Link>
        <Link to={"/shopping-cart"}>
          <CiShoppingCart className="text-[30px] text-white cursor-pointer hover:text-gray-100" />
        </Link>

        {menu ? (
          <div
            className="cursor-pointer md:hidden block"
            onClick={() => setMenu(false)}
          >
            <IoCloseSharp className="text-[30px] text-white" />
          </div>
        ) : (
          <div
            className="cursor-pointer md:hidden block"
            onClick={() => setMenu(true)}
          >
            <IoMdMenu className="text-[30px] text-white" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import BrowsByCategory from "../../Components/BrowsByCategory/BrowsByCategory";
import Section7 from "../Home/Section7/Section7";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="mt-[50px] md:px-[100px] px-[25px]">
      {/* title */}
      <div className="flex flex-col items-center text-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="md:text-[40px] text-[25px] font-[700]">
            Contact Us
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span>Any question or remarks? Just write us a message!</span>
        </motion.div>
      </div>

      {/* contact form */}
      <div className="flex flex-col md:flex-row mt-[50px] w-[100%] md:h-[700px] mb-[100px]">
        {/* left */}
        <div className="flex-[1] bg-black p-[40px] rounded-md flex flex-col justify-between">
          {/* title */}
          <div className="text-white flex md:block flex-col text-center gap-[5px] md:gap-0 md:mb-0 mb-[25px] md:text-left">
            <div>
              <span className="text-[28px] text-center font-[600]">
                Contact Information
              </span>
            </div>

            <div>
              <span className="text-[17px] font-[300]">
                Say something to start a live chat!
              </span>
            </div>
          </div>

          {/* info */}
          <div className="text-white flex flex-col gap-[25px] md:justify-start justify-center items-center md:items-start">
            {/* phone */}
            <div className="flex md:flex-row flex-col items-center gap-[20px]">
              <FaPhoneVolume className="text-[20px]" />
              <span>+1012 3456 789</span>
            </div>

            {/* gmail */}
            <div className="flex md:flex-row flex-col items-center gap-[20px]">
              <IoMdMail className="text-[20px]" />
              <span>demo@gmail.com</span>
            </div>

            {/* location */}
            <div className="flex md:flex-row flex-col items-center gap-[20px] text-center md:text-start">
              <FaLocationDot className="text-[20px]" />
              <span>
                132 Dartmouth Street Boston, <br /> Massachusetts 02156 United
                States
              </span>
            </div>
          </div>

          {/* icons */}
          <div className="text-white flex items-center md:justify-start mt-[20px] md:mt-0 justify-center  gap-[25px] text-[20px]">
            <div className="bg-gray-800 p-[10px] rounded-full">
              <FaTwitter />
            </div>
            <div className="p-[10px] rounded-full">
              <FaInstagram />
            </div>
            <div className="bg-gray-800 p-[10px] rounded-full">
              <FaDiscord />
            </div>
          </div>
        </div>
        {/* right */}
        <div className="flex-[2] p-[40px] gap-[50px]">
          <form className="flex flex-col gap-[50px]">
            <div className="md:grid grid-cols-2 md:gap-x-[50px] md:gap-y-[50px] flex flex-col gap-[25px]">
              <div className="flex flex-col ">
                <span>First Name</span>
                <input
                  type="text"
                  className="outline-none p-[7px] border-b-black/50 border-solid border-b-[1px]"
                />
              </div>

              <div className="flex flex-col ">
                <span>Last Name</span>
                <input
                  type="text"
                  className="outline-none p-[7px] border-b-black/50 border-solid border-b-[1px]"
                />
              </div>

              <div className="flex flex-col ">
                <span>Email</span>
                <input
                  type="email"
                  className="outline-none p-[7px] border-b-black/50 border-solid border-b-[1px]"
                />
              </div>

              <div className="flex flex-col ">
                <span>Phone Number</span>
                <input
                  type="text"
                  className="outline-none p-[7px] border-b-black/50 border-solid border-b-[1px]"
                />
              </div>
            </div>

            {/* subject */}

            <div className="flex flex-col  gap-[20px]  flex-wrap">
              {/* title */}
              <div>
                <span className="font-[700] text-[18px]">Select Subject?</span>
              </div>

              <div className="flex  md:flex-row flex-col items-start md:items-center gap-[20px]">
                <div className="flex items-center gap-[10px]">
                  <input
                    type="radio"
                    id="subject1"
                    name="subject"
                    className="accent-red-500"
                  />
                  <label htmlFor="subject1" className="cursor-pointer">
                    <span>General Inquiry</span>
                  </label>
                </div>

                <div className="flex items-center gap-[10px]">
                  <input
                    type="radio"
                    id="subject2"
                    name="subject"
                    className="accent-red-500"
                  />
                  <label htmlFor="subject2" className="cursor-pointer">
                    <span>General Inquiry</span>
                  </label>
                </div>

                <div className="flex items-center gap-[10px]">
                  <input
                    type="radio"
                    id="subject3"
                    name="subject"
                    className="accent-red-500"
                  />
                  <label htmlFor="subject3" className="cursor-pointer">
                    <span>General Inquiry</span>
                  </label>
                </div>

                <div className="flex items-center gap-[10px]">
                  <input
                    type="radio"
                    id="subject4"
                    name="subject"
                    className="accent-red-500"
                  />
                  <label htmlFor="subject4" className="cursor-pointer">
                    <span>General Inquiry</span>
                  </label>
                </div>
              </div>
            </div>

            {/* message */}
            <div>
              <div className="flex flex-col ">
                <span>Message</span>
                <input
                  type="text"
                  className="outline-none p-[7px] border-b-black/50 border-solid border-b-[1px]"
                />
              </div>
            </div>

            {/* button */}
            <div className="flex md:justify-end justify-center">
              <button className="py-[15px] px-[30px] bg-red-800 text-white rounded-md hover:bg-red-900">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* brows by category */}
      <div>
        <BrowsByCategory />
      </div>

      <div className="border-red-500 border-solid border-t-[1px]">
        <Section7 />
      </div>
    </div>
  );
};

export default Contact;

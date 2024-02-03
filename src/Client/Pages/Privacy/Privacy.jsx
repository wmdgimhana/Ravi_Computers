import React from "react";
import { HiMiniArrowLongLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="md:px-[100px] px-[25px] mt-[50px]">
      {/* title */}
      <div className="flex flex-col mb-[100px] md:justify-start justify-center md:items-start items-center">
        <div>
          <span className="md:text-[35px] text-[25px] font-[700]">
            Privacy Policy
          </span>
        </div>
        <div className="flex items-center gap-[5px] cursor-pointer w-fit md:ml-[100px]">
          <HiMiniArrowLongLeft className="text-[30px] text-red-500" />
          <Link
            to={"/products/1"}
            className="text-[20px] font-[400] cursor-pointer hover:text-black/90"
          >
            continue shopping
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-[50px] mb-[100px]">
        <div>
          <div className="flex flex-col gap-[5px]">
            <div>
              <span className="text-[25px] font-[700]">Title</span>
            </div>
            <div>
              <p className="text-[16px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                officia cum, et quos possimus eos. Deleniti iste enim aspernatur
                ipsa ullam doloribus et optio, velit adipisci tempora ea porro
                vero maxime, modi distinctio quisquam sint aliquid delectus
                aperiam similique praesentium voluptate? Eligendi velit
                excepturi necessitatibus, magni itaque aperiam porro tempora
                soluta dolorem ratione hic suscipit quaerat reprehenderit
                mollitia placeat deserunt quisquam, qui repudiandae? Sint
                voluptatem adipisci autem eveniet neque tempore in excepturi?
                Soluta sequi officia ullam dicta illum molestiae qui, ab ducimus
                cupiditate, impedit nesciunt ea quibusdam delectus numquam omnis
                deleniti placeat. Culpa, hic dolore. Exercitationem fugiat
                dolores numquam architecto?
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-[5px]">
            <div>
              <span className="text-[25px] font-[700]">Title</span>
            </div>
            <div>
              <p className="text-[16px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                officia cum, et quos possimus eos. Deleniti iste enim aspernatur
                ipsa ullam doloribus et optio, velit adipisci tempora ea porro
                vero maxime, modi distinctio quisquam sint aliquid delectus
                aperiam similique praesentium voluptate? Eligendi velit
                excepturi necessitatibus, magni itaque aperiam porro tempora
                soluta dolorem ratione hic suscipit quaerat reprehenderit
                mollitia placeat deserunt quisquam, qui repudiandae? Sint
                voluptatem adipisci autem eveniet neque tempore in excepturi?
                Soluta sequi officia ullam dicta illum molestiae qui, ab ducimus
                cupiditate, impedit nesciunt ea quibusdam delectus numquam omnis
                deleniti placeat. Culpa, hic dolore. Exercitationem fugiat
                dolores numquam architecto?
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-[5px]">
            <div>
              <span className="text-[25px] font-[700]">Title</span>
            </div>
            <div>
              <p className="text-[16px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                officia cum, et quos possimus eos. Deleniti iste enim aspernatur
                ipsa ullam doloribus et optio, velit adipisci tempora ea porro
                vero maxime, modi distinctio quisquam sint aliquid delectus
                aperiam similique praesentium voluptate? Eligendi velit
                excepturi necessitatibus, magni itaque aperiam porro tempora
                soluta dolorem ratione hic suscipit quaerat reprehenderit
                mollitia placeat deserunt quisquam, qui repudiandae? Sint
                voluptatem adipisci autem eveniet neque tempore in excepturi?
                Soluta sequi officia ullam dicta illum molestiae qui, ab ducimus
                cupiditate, impedit nesciunt ea quibusdam delectus numquam omnis
                deleniti placeat. Culpa, hic dolore. Exercitationem fugiat
                dolores numquam architecto?
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-[5px]">
            <div>
              <span className="text-[25px] font-[700]">Title</span>
            </div>
            <div>
              <p className="text-[16px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                officia cum, et quos possimus eos. Deleniti iste enim aspernatur
                ipsa ullam doloribus et optio, velit adipisci tempora ea porro
                vero maxime, modi distinctio quisquam sint aliquid delectus
                aperiam similique praesentium voluptate? Eligendi velit
                excepturi necessitatibus, magni itaque aperiam porro tempora
                soluta dolorem ratione hic suscipit quaerat reprehenderit
                mollitia placeat deserunt quisquam, qui repudiandae? Sint
                voluptatem adipisci autem eveniet neque tempore in excepturi?
                Soluta sequi officia ullam dicta illum molestiae qui, ab ducimus
                cupiditate, impedit nesciunt ea quibusdam delectus numquam omnis
                deleniti placeat. Culpa, hic dolore. Exercitationem fugiat
                dolores numquam architecto?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;

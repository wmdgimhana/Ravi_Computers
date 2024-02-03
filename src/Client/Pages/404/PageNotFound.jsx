import React from "react";

const PageNotFound = () => {
  return (
    <div className="h-[100vh] bg-black text-white flex items-center justify-center">
      <div className="flex justify-center items-center flex-col">
        <div>
          <span className="text-[150px]">404</span>
        </div>
        <div>
          <span className="text-[30px]">Page Not Found</span>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;

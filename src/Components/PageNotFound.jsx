import React from 'react'
import PageNotImage from "../assets/page_notfound.svg"
const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center p-5 h-[100vh]  ">
      <div className="">
        <img src={PageNotImage} className="w-[600px]" />
      </div>
      <p className="text-[#CB022C] text-2xl font-bold flex flex-wrap mt-8 capitalize">
      Page Not Found
      </p>
    </div>
  );
}

export default PageNotFound

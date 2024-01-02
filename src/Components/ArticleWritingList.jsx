import React from "react";
import { FaMedium } from "react-icons/fa6";
import { AiOutlineMediumWorkmark } from "react-icons/ai";
import { Link } from "react-router-dom";

const ArticleWritingList = ({ item }) => {
  return (
    <a href={item.url} target="_blank" rel="noreferrer">
      <div className="group">
        <div className="shadow-lg group-hover:shadow-2xl transition-all ease-linear  duration-300  group-hover:scale-110  rounded-b-lg  ">
          <div className=" w-72  sm:w-96 md:w-80  group   cursor-pointer relative">
            <img
              className="w-full h-56  rounded-t-lg group-hover:opacity-10"
              src={item.img}
            />
            <p className="absolute top-0 opacity-0  font-semibold  translate-y-0 group-hover:translate-y-5 transition duration-500 ease-in   group-hover:opacity-100  text-wrap text-[14px] overflow-auto p-3">
              {item.description}
            </p>
          </div>
          <div></div>
          <h4 className="p-2 font-semibold text-gray-600 hover:text-gray-800 text-center text-lg -mb-4">
            {item.title}
          </h4>
          <div className="flex  p-3 pl-4 ">
            {/* <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="text-[#475569] hover:text-[#1e293b] ease-in-out duration-200 hover:scale-125 flex items-center justify-center space-x-2"
            >
              <FaMedium size={24} title={item.url} />
              <AiOutlineMediumWorkmark size={40} title={item.url} />
            </a> */}

            <p
      
              className="text-[#475569] hover:text-[#1e293b] ease-in-out duration-200 hover:scale-125 flex items-center justify-center space-x-2"
            >
              <FaMedium size={24} title={item.url} />
              <AiOutlineMediumWorkmark size={40} title={item.url} />
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ArticleWritingList;

import React from 'react'
import { FaMedium } from 'react-icons/fa6';

const ArticleWritingList = ({item}) => {
  return (
    <div className="group">
      <div className="shadow-lg group-hover:shadow-2xl transition-all ease-linear  duration-300  group-hover:scale-110  rounded-b-lg  ">
        <div className=" w-72  sm:w-96 md:w-80  group  cursor-pointer">
          <img className="w-full h-44 rounded-t-lg" src={item.img} />
        </div>
        <h4 className="p-2 font-semibold text-gray-600 hover:text-gray-800 text-center text-lg -mb-4">
          {item.title}
        </h4>
        <div className="flex items-center p-4 space-x-4">
      
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="text-[#475569] hover:text-[#1e293b] ease-in-out duration-200 hover:scale-125"
          >
            <FaMedium size={24} title={item.url} />
          </a>
         
        </div>
      </div>
    </div>
  );
}

export default ArticleWritingList

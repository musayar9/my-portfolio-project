import React from 'react'
import Error404 from "../assets/fixing_bugs.svg"
const Error = ({message}) => {
  return (
    <div className="flex flex-col items-center justify-center p-5 h-[100vh]  ">
      <div className="">
        <img src={Error404} alt={message} className="w-[600px]" />
      </div>
      <p className="text-[#CB022C] text-2xl font-bold flex flex-wrap mt-8 capitalize">
        {message}
      </p>
    </div>
  );
}

export default Error

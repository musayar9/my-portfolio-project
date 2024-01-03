import React from "react";
import Marquee from "react-fast-marquee";
import { FaHtml5, FaSass } from "react-icons/fa6";
import { FaCss3, FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiRedux, SiExpress, SiTailwindcss, SiJquery } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { PiFileSql } from "react-icons/pi";
import { BsFileBarGraphFill, BsGithub } from "react-icons/bs";

const Talents = () => {
  return (
    <Marquee
      className="bg-[#9ca3af] "
      direction="right"
      speed={200}
      loop={0}
      play={true}
      gradient={true}
      gradientColor="#e2e8f0"
      gradientWidth={250}
    >
      <div className="flex items-center space-x-2 justify-center px-6 my-3  text-[#334155]  border-r-2 border-[#eee]">
        {" "}
        <FaHtml5 className="text-[#E54C21]" /> <span>HTML5</span>
      </div>
      <div className="px-6  flex items-center justify-center space-x-2   text-[#334155]  my-3  border-r-2 border-[#eee] ">
        <FaCss3 className="text-[#254BDD]" /> <span>CSS</span>
      </div>
      <div className="px-6  flex items-center justify-center space-x-2   text-[#334155]  my-3  border-r-2 border-[#eee] ">
        <FaSass className="text-[#C76494]" /> <span>Sass-Scss</span>
      </div>
      <div className="px-6  my-3  text-[#334155]  border-r-2 border-[#eee] flex items-center justify-center space-x-2">
        <SiJquery className="text-[#78CFF5]" />
        <span>Jquery</span>
      </div>
      <div className="px-6  my-3  text-[#334155]  border-r-2 border-[#eee] flex items-center justify-center space-x-2">
        <RiJavascriptFill className="text-[#EFD81D]" />
        <span>JavaScript</span>
      </div>
      <div className="px-6  my-3 text-[#334155]  border-r-2 border-[#eee] flex items-center justify-center space-x-2">
        <FaReact className="text-[#149ECA]" />
        <span>React</span>
      </div>
      <div className="px-6 my-3  text-[#334155]  border-r-2 border-[#eee] flex items-center justify-center space-x-2">
        <SiRedux className="text-[#764ABC]" />
        <span>Redux Toolkit</span>
      </div>
      <div className="px-6 my-3 text-[#334155]  border-r-2 border-[#eee] flex items-center justify-center space-x-2">
        <FaNodeJs className="text-[#026E00]" />
        <span>NodeJs</span>
      </div>
      <div className="px-6 my-3 text-[#334155]   border-r-2 border-[#eee] flex items-center justify-center space-x-2">
        <SiExpress className="text-gray-50" />
        <span>ExpressJs</span>
      </div>
      <div className="px-6 my-3 text-[#334155]  border-r-2 border-[#eee] flex items-center justify-center space-x-2">
        <BiLogoMongodb className="text-[#479848]" />
        <span>MongoDb</span>
      </div>
      <div className="px-6 my-3 text-[#334155]  border-r-2 border-[#eee]  flex items-center justify-center space-x-2">
        <PiFileSql className="text-gray-200" />
        <span>Sql</span>
      </div>
      <div className="px-6 my-3  text-[#334155] border-r-2 border-[#eee]  flex items-center justify-center space-x-2">
        <FaBootstrap className="text-[#7B11F7]" />
        <span>Bootstrap</span>
      </div>
      <div className="px-6 my-3 text-[#334155]  border-r-2 border-[#eee] flex items-center justify-center space-x-2">
        <SiTailwindcss className="text-[#38BDF8]" />
        <span>TailwindCss</span>
      </div>
      <div className="px-6 my-3 text-[#334155] border-r-2 border-[#eee] flex items-center justify-center space-x-2">
        <BsFileBarGraphFill className="text-yellow-600" />
        <span>PowerBı</span>
      </div>
      <div className="px-6 my-3 text-[#334155] border-r-2 border-[#eee] flex items-center justify-center space-x-2">
        <BsGithub className="text-[#000000]" />
        <span>Github</span>
      </div>
    </Marquee>
  );
};

export default Talents;

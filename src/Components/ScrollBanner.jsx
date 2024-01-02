import React, { useRef } from "react";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa";
const ScrollBanner = () => {
  const ref = useRef();
  console.log(ref.current);
  const scrollers = document.querySelectorAll(".scroller");
  console.log("scrollers", scrollers);


  const addAnimation = () => {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);
      const scrollerInner = scroller.querySelector(".scroller_inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const dublicatedFrom = item.cloneNode(true);
        dublicatedFrom.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(dublicatedFrom);
      });
    });
  };
  
  
  if (!window.matchMedia("(prefers-reduced-motion:reduce").matches) {
    addAnimation();
  }
  return (
    <div className="scroller" ref={ref} dataspeed="fast">
      <ul className="tag-list scroller_inner">
        <li>
          <FaHtml5 /> HTML5{" "}
        </li>
        <li>
          <FaCss3 /> CSS
        </li>
        <li>JavaScript</li>
        <li>ReactJs</li>
        <li>Redux Toolkit</li>
        <li>NodeJs</li>
        <li>ExpressJs</li>
        <li>MongoDb</li>
        <li>Sql</li>
        <li>Bootstrap</li>
        <li>TailwindCss</li>
        <li>PowerBı</li>
      </ul>
    </div>
  );
};

export default ScrollBanner;

import {useState, useRef} from 'react'
import {FaGithub} from "react-icons/fa";
import {BsDisplay} from "react-icons/bs";
import {MdClose} from "react-icons/md";
import { FaCirclePlay } from "react-icons/fa6";
const ItemList = ({item}) => {

    const [show, setShow] = useState(false)
    const ref = useRef()

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
              href={item.github}
              target="_blank"
              rel="noreferrer"
              className="text-[#475569] hover:text-[#1e293b] ease-in-out duration-200 hover:scale-125"
            >
              <FaGithub size={24} title={item.github} />
            </a>
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="text-[#475569] hover:text-[#1e293b] ease-in-out duration-200 hover:scale-125"
            >
              <BsDisplay size={24} title={item.url} />
            </a>
            <>
              <button
                onClick={() => {
                  setShow(true);
                }}
                className="text-[#475569] hover:text-[#1e293b] ease-in-out duration-200 hover:scale-125"
                type="button"
              >
                <FaCirclePlay size={24} />
              </button>
            </>
          </div>
        </div>

        {show && (
          <div className=" fixed  z-50 inset-0 bg-black bg-opacity-75 flex justify-center items-center w-full  ">
            <div className=" absolute top-20 p-4 w-full max-w-2xl max-h-full  ">
              {/* Modal content */}
              <div className="relative bg-black pt-4 rounded-lg shadow ">
                <div className="flex items-center justify-between">
                  <p className="text-gray-50 pl-4">{item.title}</p>
                  <button
                    ref={ref}
                    type="button"
                    className="absolute    end-2.5 text-gray-50 hover:text-red-800 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                    onClick={() => setShow(false)}
                  >
                    <MdClose size={18} />
                  </button>
                </div>

                <div>
                  <div className="flex items-center justify-center ">
                    <video
                      className="w-[800px] h-[400px] rounded-b-lg"
                      width="400"
                      controls
                      autoPlay
                    >
                      <source src={item?.video} />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
}

export default ItemList
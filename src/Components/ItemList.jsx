import React, {useState, useRef} from 'react'
import {FaGithub} from "react-icons/fa";
import {BsDisplay} from "react-icons/bs";
import {MdClose} from "react-icons/md";
import { FaCirclePlay } from "react-icons/fa6";
const ItemList = ({item}) => {

    const [show, setShow] = useState(false)
    const ref = useRef()

    return (
        <div className="group">

            <div
                className="shadow-lg group-hover:shadow-2xl ease-linear  duration-200  group-hover:scale-110  rounded-b-lg  ">
                <div className="  bg-white  w-80 group  cursor-pointer">
                    <img className="w-full h-44 rounded-t-lg" src={item.img}/>

                </div>
                <h4 className="p-2 font-semibold text-gray-600 hover:text-gray-800 text-center text-md -mb-4">{item.title}</h4>
                <div className="flex items-center p-4 space-x-4">
                    <button>
                        <FaGithub size={24} title="github"/>
                    </button>
                    <a href={item.url}
                       target="_blank"
                       rel="noreferrer"
                       disabled={show === true}
                    >
                        <BsDisplay size={24} title={item.url}/>

                    </a>
                    <>
                        {/* Modal toggle */}

                        <button onClick={() => {
                            setShow(true)
                            console.log(show)
                        }}
                                className="disabled:text-red-700 not-allowed"
                              disabled={show == true ? true : false}
                                type="button"
                        >
                            <FaCirclePlay  size={24}/>

                        </button>
                        {/* Main modal */}

                    </>


                </div>
            </div>


            {show && (
                <div className=" fixed  z-50 inset-0 bg-black bg-opacity-75 flex justify-center items-center w-full  "
                >
                    <div className=" absolute top-20 p-4 w-full max-w-2xl max-h-full  ">
                        {/* Modal content */}
                        <div className="relative bg-black pt-4 rounded-lg shadow ">
                            <div className="flex items-center justify-between">
                                <p className="text-gray-50 pl-4">{item.title}</p>
                                <button ref={ref}
                                        type="button"
                                        className="absolute    end-2.5 text-gray-50 hover:text-red-800 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                                        onClick={() => setShow(false)}

                                >
                                    <MdClose size={18}/>

                                </button>

                            </div>


                            <div>
                                <div className="flex items-center justify-center ">
                                    <video className='w-[800px] h-[400px] rounded-b-lg' width="400" controls autoPlay>
                                        <source src={item?.video}/>

                                    </video>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            )}

        </div>


    )
}

export default ItemList
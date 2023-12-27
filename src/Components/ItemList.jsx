import React, {useState, useRef} from 'react'
import {FaGithub} from "react-icons/fa";
import {BsDisplay} from "react-icons/bs";
import {MdClose} from "react-icons/md";

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
                       rel="noreferrer">
                        <BsDisplay size={24} title={item.url}/>
                    </a>
                    <>
                        {/* Modal toggle */}
                        <button onClick={() => {
                            setShow(true)
                            console.log(show)
                        }}

                                className="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                type="button"
                        >
                            Toggle modal
                        </button>
                        {/* Main modal */}

                    </>


                </div>
            </div>


            {show && (
                <div className=" fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full  "
                >
                    <div className=" absolute top-24 p-4 w-full max-w-2xl max-h-full  ">
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
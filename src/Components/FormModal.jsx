import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {MdClose} from "react-icons/md";
import {sendFormMail} from "../redux/portfolioSlice.jsx"
import SendForm from "./SendForm.jsx"
// import Form from "./Form.jsx"
const FormModal = ()=>{
    const {sendFormModal} = useSelector((state) => state.portfolio);
    console.log(sendFormModal)
    const dispatch = useDispatch()
    return (
        <>
            <div className=" fixed  z-50 inset-0 bg-black bg-opacity-75 flex justify-center items-center w-full  "
            >
                <div className=" absolute top-18 p-4 w-full max-w-2xl max-h-full   ">
                    {/* Modal content */}
                    <div className="relative bg-white pt-4 rounded-lg ">
                        <div className="flex items-center  justify-between border-b-2 border-gray-400 pb-2">
                            <p className="text-gray-500 pl-4 font-semibold">Send Mail</p>
                            <button onClick={()=>dispatch(sendFormMail(false))}
                                    type="button"
                                    className="absolute    end-2.5 text-gray-500 hover:text-red-800 rounded-lg text-sm w-8 h-8 
                                    ms-auto inline-flex justify-center items-center "

                            >
                                <MdClose size={18}/>

                            </button>

                        </div>
                        <div>
                            <SendForm/>

                        </div>


                    </div>

                </div>
            </div>
        </>

    )

}

export default FormModal
import { useDispatch, useSelector } from "react-redux";
import {sendFormMail} from "../redux/portfolioSlice.jsx"
const Form = () =>{
    const {sendFormModal} = useSelector((state) => state.portfolio);
    console.log(sendFormModal)
    const dispatch = useDispatch()
    return (
        <button className=" fixed bottom-4 right-4 px-4 py-2 bg-gray-400 text-white font-semibold drop-shadow-xl animate-bounce mt-4 rounded-md hover:bg-gray-500 duration-150 ease-in-out" onClick={() => {
            dispatch(sendFormMail(true))
            console.log(sendFormModal)
        }}>Send Mail</button>

    )

}

export default  Form
import { useDispatch } from "react-redux";
import { sendFormMail } from "../redux/portfolioSlice.jsx";
import { MdOutgoingMail } from "react-icons/md";
import { memo } from "react";

const SendMailBtn = () => {
  const dispatch = useDispatch();
  return (
    <button
      className="z-10 fixed bottom-4 right-4 px-4 py-4 bg-gray-500 text-white font-semibold  shadow-2xl drop-shadow-xl
        animate-bounce mt-4 rounded-full hover:bg-gray-600 duration-150 ease-in-out"
      onClick={() => {
        dispatch(sendFormMail(true));
      }}
    >
      <MdOutgoingMail size={26} />
    </button>
  );
};

export default memo(SendMailBtn);

import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import emailjs from "@emailjs/browser";
import { sendFormMail } from "../redux/portfolioSlice.jsx";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
const ReCAPTCHA_KEY = import.meta.env.VITE_CAPTCHA_API_KEY;

const SendForm = () => {
  const form = useRef();
  const [mail, sendMail] = useState({
    user_email: "",
    subject: "",
    body: "",
  });
  const [isNotRobot, setIsNotRobot] = useState(false);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    const recipientEmail = "musasayar67@gmail.com";

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      mail.subject
    )}&body=${encodeURIComponent(mail.body)}&from=${mail.user_email}&reply-to=${
      mail.user_email
    }&cc=${mail.user_email}`;

    window.location.href = mailtoLink;
    sendMail({
      user_email: "",
      subject: "",
      body: "",
    });
    dispatch(sendFormMail(false));
    toast.success("👏 Your e-mail has been sent", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    sendMail({
      ...mail,
      [name]: value,
    });
  };
  function onChange() {
    setIsNotRobot(true);
  }

  return (
    <>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-2  mt-4"
      >
        <div className="relative z-0 w-full mb-3 md:mb-5 group">
          <input
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-non focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            type="email"
            id="user_email"
            name="user_email"
            value={mail.user_email}
            onChange={handleChange}
            required
          />
          <label
            htmlFor="user_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>
        <div className="relative z-0 w-full mb-3 md:mb-5 group">
          <input
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            type="text"
            id="subject"
            name="subject"
            value={mail.subject}
            onChange={handleChange}
            required
          />
          <label
            htmlFor="subject"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Subject
          </label>
        </div>
        <div className="relative z-0 w-full mb-3 md:mb-5 group">
          <textarea
            className="flex py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400  appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            type="textarea"
            name="body"
            id="body"
            value={mail.body}
            rows={3}
            onChange={handleChange}
            required
          />
          <label
            htmlFor="body"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Body
          </label>
        </div>
        <div className="flex items-center justify-end">
          <button
            disabled={!isNotRobot}
            type="submit"
            className="text-sm disabled:bg-red-400 px-3 py-1 bg-gray-500 text-gray-50 rounded-md hover:bg-gray-600 duration-200 ease-out disabled:translate-y-0 active:translate-y-2 shadow-lg"
            value="Send"
          >
            Send Mail
          </button>
        </div>
        <ReCAPTCHA
          className="m-5 flex items-center justify-center"
          sitekey={ReCAPTCHA_KEY}
          onChange={onChange}
        />
      </form>
    </>
  );
};

export default SendForm;

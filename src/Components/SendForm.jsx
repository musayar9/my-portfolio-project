import React, {useState, useRef} from "react"
import {useDispatch, useSelector} from "react-redux"
import emailjs from '@emailjs/browser';
import {sendFormMail} from "../redux/portfolioSlice.jsx"
import { toast } from 'react-toastify';
import ReCAPTCHA from "react-google-recaptcha";
const ReCAPTCHA_KEY = import.meta.env.VITE_CAPTCHA_API_KEY;
const EMAIL_KEY = import.meta.env.VITE_EMAIL_API_KEY;
const SendForm = () => {

    const form = useRef()
    const [mail, sendMail] = useState({
        user_name: "",
        user_email: "",
        subject: "",
        message: ""
    })
    const [isNotRobot, setIsNotRobot] = useState(false)
    const {sendFormModal} = useSelector((state) => state.portfolio);
    console.log(sendFormModal)
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_odqed8z', 'template_9ljbbad', form.current, `${EMAIL_KEY}`)
            .then((result) => {
                console.log(result);
            }, (error) => {
                console.log(error.text);
                throw new Error(error.text)
            });
        e.target.reset()
        sendMail({
            user_name: "",
            user_email: "",
            subject: "",
            message: ""
        })
        dispatch(sendFormMail(false))
        toast.success("👏 Your e-mail has been sent", {
            position: toast.POSITION.TOP_CENTER
        });
    };
    const handleChange = (e) => {
        const {name, value} = e.target
        sendMail({
            ...mail,
            [name]: value

        })

    }
    function onChange(value) {
        console.log("Captcha value:", value);
        setIsNotRobot(true)
    }

    return (
        <>
            <form ref={form} onSubmit={handleSubmit} className="max-w-md mx-auto p-2 mt-4">

                <div className="relative z-0 w-full mb-5 group">
                    <input
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        type="name" id="user_name" name="user_name" value={mail.user_name} onChange={handleChange}
                        required/>
                    <label
                        htmlFor="user_name"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Name and Surname
                    </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">

                    <input
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-non focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        type="email" id="user_email" name="user_email" value={mail.user_email} onChange={handleChange}
                        required/>
                    <label
                        htmlFor="user_email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Email
                    </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        type="text" id="subject" name="subject" value={mail.subject} onChange={handleChange}
                        required/>
                    <label
                        htmlFor="subject"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Subject
                    </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">

                          <textarea
                              className="flex py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400  appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                              type="textarea" name="message" id="message" value={mail.message} rows={4}
                              onChange={handleChange} required/>
                    <label
                        htmlFor="message"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Message
                    </label>
                </div>
                <div className="flex items-center justify-end">
                    <button disabled={!isNotRobot} type="submit" className="text-sm disabled:bg-red-400 px-3 py-1 bg-gray-500 text-gray-50 rounded-md hover:bg-gray-600 duration-200 ease-out active:translate-y-2 shadow-lg" value="Send">Send Mail</button>
                </div>
                <ReCAPTCHA
                    sitekey={ReCAPTCHA_KEY}
                    onChange={onChange}
                />
            </form>
        </>

    )

}

export default SendForm;
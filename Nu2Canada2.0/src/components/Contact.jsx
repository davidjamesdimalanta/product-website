import React from "react"
import "/assets/undraw_contact_us_re_4qqt.svg"
function Contact() {
    return (
        <div className="bg-stone-900 scroll-smooth">
            <div className='pt-2 pb-3'>
            <div className="bg-white w-full h-screen rounded-3xl flex justify-center items-center pt-2">
               <div className="container flex flex-col md:flex-row max-h-screen px-5">
                <form 
                    action="https://getform.io/f/a97867aa-887e-46c1-ba12-60774fc5f51e" 
                    method="POST" 
                    className="flex flex-col w-full md:w-6/12">
                    <h1 className="text-5xl pb-10 font-Poppins font-bold">How can we help?</h1>
                    <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    className="p-2 bg-transparent border-2 
                    rounded-md focus:outline-none" />
                    <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    className=" my-2 p-2 bg-transparent border-2 
                    rounded-md focus:outline-none" />
                    <input 
                    type="datetime-local" 
                    name="date" 
                    placeholder="Date" 
                    className=" my-2 p-2 bg-transparent border-2 
                    rounded-md focus:outline-none" />
                    <textarea 
                    name="message" 
                    placeholder="message"
                    rows="10"
                    className="p-2 mb-4 bg-transparent border-2 rounded-md
                    focus:outline-none">
                    </textarea>
                    <button
                        type="submit"
                        className="text-center inline-block w-max text-base 
                        font-medium hover:text-white justify-center items-center 
                        bg-red-800 py-2 px-8 rounded-full border-l-2 border-r-4 
                        border-slate-900 border-b-4 hover:scale-105">
                            Submit 
                    </button>
                </form>
                <img 
                    src="/assets/undraw_contact_us_re_4qqt.svg" 
                    alt="Contact Img"
                    className="w-full md:w-6/12 px-8 py-6 hidden md:block" />
               </div>
             </div>
            </div>
        </div>
    )
}
export default Contact
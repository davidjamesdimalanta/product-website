import React from "react";
import "/assets/undraw_interview_re_e5jn.svg"
import 'animate.css'
function Service2() {
    return (
        <div className="bg-white w-full max-h-full rounded-3xl flex justify-start items-center intersect:animate-fadeIn intersect-once h-auto">
            <div className="container flex flex-col md:flex-row md:px-10 md:py-8 md:justify-center items-center h-auto">
            <img 
                src="/assets/undraw_interview_re_e5jn.svg" 
                alt="svg"
                className="h-auto w-96 py-10 sm:block" />
                <div className="px-4 sm:pl-8 md:pl-8 lg:pl-32 py-2">
                <h1 className="text-3xl md:text-5xl lg:text-5xl font-Poppins pt-3 font-semibold">
                    Immigration Services
                </h1>
                <p 
                    className=" w-auto font-NotoSansLaoLooped pb-4">
                        Unlock the door to a brighter future with our comprehensive 
                        immigration services. Our team of experts will guide you through the complex process of obtaining a visa, 
                        permanent residency or citizenship, ensuring that your application is in compliance with all legal requirements. 
                        With our help, you can realize your dreams of living and working in a new country. 
                </p>
                <button className="flex justify-center items-center 
                bg-red-800 py-2 px-6 rounded-full hover:text-white
                border-l-2 border-r-4 border-slate-900 border-b-4 hover:scale-105 transition ease-in-out">
                    BOOK A CONSULTATION
                </button>
                </div>
            </div>
        </div>
    )
}

export default Service2
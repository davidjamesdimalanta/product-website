import React from "react"
import "/assets/undraw_about_me_re_82bv.svg"

function Bout() {
    return (
        <div className="scroll-smooth">
        <div className="pt-2 pb-3 h-screen">
        <div className="bg-white w-full rounded-3xl flex flex-col md:flex-row justify-start items-center p-10 shadow-xl">
       <div className="container flex flex-col justify-start items-start">
         <h1 className="text-5xl md:text-7xl font-Poppins font-bold md:pt-4 md:pb-2">
            About Us
        </h1>
        <p className="w-auto font-NotoSansLaoLooped py-2">
        Nu2Canada is a Canadian immigration service that was established in 
        2022 with a mission to simplify the immigration process for those who want to 
        study, work, or build a new life in Canada. Our team consists of experienced 
        legal consultants who provide affordable guidance and a wide range of services 
        to fit your individual needs. As a Filipino-based company, we understand the 
        unique challenges that come with immigrating to a new country and are dedicated 
        to making the process as smooth and stress-free as possible. Trust Nu2Canada to 
        guide you on your journey to becoming a Canadian citizen.
        </p>
        </div>
        <img 
            src="/assets/undraw_about_me_re_82bv.svg" 
            alt="about me img" 
            className="h-96"/>
    </div>
        </div>
    </div>
    )
}

export default Bout
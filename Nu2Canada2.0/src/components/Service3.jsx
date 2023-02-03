import React from "react";
import "/assets/undraw_education_f8ru.svg"
import 'animate.css'

function Service3() {
    return (
        <div className="bg-white w-full max-h-full rounded-3xl flex justify-start items-center intersect:animate-fadeIn intersect-once">
            <div className="container px-4 flex flex-col md:flex-row md:px-10 md:py-8 md:justify-center items-center">
                <div className="px-4 sm:pl-8 md:pl-8 py-2">
                <h1 className="text-3xl md:text-5xl lg:text-5xl font-Poppins font-semibold pt-6 md:pt-0">
                    Enrollment & Transfer Service</h1>
                <p className=" w-auto font-NotoSansLaoLooped">
                Simplify your academic journey with our enrollment and transfer services. 
                Our dedicated team will assist you in the process of transferring credits and enrolling 
                in a new educational institution. Take the first step 
                towards reaching your academic goals and let us help you get there.</p>
                </div>
            <div>
            <img 
                src="/assets/undraw_education_f8ru.svg" 
                alt="svg"
                className="h-auto w-96 sm:w-96 md:w-auto lg:w-auto py-10 sm:block" />
            </div>
            
            </div>
        </div>
    )
}

export default Service3
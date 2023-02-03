import React, { useState } from "react";
import 'animate.css'


function ServiceCard({title, desc, imgUrl, bb5b}) {
    const [expanded, setExpanded] = useState(false);
    return (
        <div className="flex flex-col justify-center items-center w-full md:w-4/12 h-96 bg-white rounded-3xl shadow-xl">
            <div className="container px-3 py-3">
            {expanded && (
                <div className="w-screen h-screen flex justify-center items-center fixed top-0 left-0 bg-black bg-opacity-50">
                    <div className="bg-white w-11/12 h-5/6 md:w-10/12 md:h-4/6 rounded-3xl shadow-2xl">
                        <div className="container flex flex-col justify-start items-start p-6">
                        <img 
                            src={imgUrl} 
                            alt="art"
                            className=" h-20 pl-4 py-1" />
                            <h1 className="text-3xl font-Poppins font-bold md:pt-4 md:pb-2">
                                {title}
                            </h1>
                            <p className="w-auto font-NotoSansLaoLooped py-2">
                                {bb5b}
                            </p>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke-width="1.5" 
                                stroke="currentColor" 
                                class="w-6 h-6 hover:scale-110"
                                onClick={() => setExpanded(false)}>
                            <path 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                            </svg>

                        </div>
                    </div>
                </div>
            )}
            <img 
                src={imgUrl} 
                alt="art"
                className=" h-20 pl-4 py-1" />
            <h1 className="text-xl md:text-2xl lg:text-3xl font-Poppins pl-4">{title}</h1>
            <p className="w-auto font-NotoSansLaoLooped pt-1 pb-6 px-4">{desc}</p>
            <button 
                className="flex justify-center items-center bg-red-800 
                        text-white py-2 px-6 rounded-full border-l-2 
                          border-r-4 border-slate-900 border-b-4"
                onClick={() => setExpanded(!expanded)}>
                    Learn More...
            </button>
            </div>
        </div>
    )
}

export default ServiceCard
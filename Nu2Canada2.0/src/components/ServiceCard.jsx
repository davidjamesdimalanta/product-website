import React from "react";
import 'animate.css'

function ServiceCard({title, desc, link, imgUrl}) {
    return (
        <div className="flex flex-col justify-center items-center w-auto h-96 bg-white rounded-3xl">
            <div className="container px-3 py-3">
            <img 
                src={imgUrl} 
                alt="art"
                className=" h-20 pl-4 py-1" />
            <h1 className="text-xl md:text-2xl lg:text-3xl font-Poppins pl-4">{title}</h1>
            <p className="w-auto font-NotoSansLaoLooped pt-1 pb-6 px-4">{desc}</p>
            <button className="flex justify-center items-center bg-red-800 
            hover:text-white hover:scale-105 transition ease-in-out py-2 px-6 rounded-full border-l-2 
            border-r-4 border-slate-900 border-b-4">
                <a href={link}>
                    Learn More...
                </a>
            </button>
            </div>
        </div>
    )
}

export default ServiceCard
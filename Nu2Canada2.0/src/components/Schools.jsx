import React from "react";
import "/assets/university SVGs/Schools.svg"


function Schools() {
    return(
        <div className="bg-white w-full h-auto rounded-3xl flex flex-col justify-start items-center
                        intersect:animate-fadeIn intersect-once">
            <h1 className="text-3xl font-Poppins pt-3">
                In Partnership With
                </h1>
            <img src="/assets/university SVGs/Schools.svg" alt="" 
                className="w-full rounded-3xl"/>
        </div>
    )
}

export default Schools
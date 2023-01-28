import React from "react";
import "/src/assets/university SVGs/Centennial_College_logo.svg"
import "/src/assets/university SVGs/Durham_College_logo.svg"
import "/src/assets/university SVGs/Logo_York_University.svg"
import "/src/assets/university SVGs/George_Brown_College_logo.svg"
import "/src/assets/university SVGs/Seneca_College_logo.svg"


function Schools() {
    return(
        <div className="bg-white w-full h-auto rounded-3xl flex flex-col justify-start items-center
                        intersect:animate-fadeIn intersect-once">
            <h1 className="text-3xl font-Poppins pt-3">
                In Partnership With
                </h1>
            <img src="/src/assets/university SVGs/Schools.svg" alt="" 
                className="w-full"/>
        </div>
    )
}

export default Schools
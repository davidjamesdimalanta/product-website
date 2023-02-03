import React from "react"
import "/assets/toronto.svg"
import 'animate.css'

function Landing() {
    return (
        <div className="bg-white w-full md:h-screen h-11/12 rounded-3xl flex justify-start items-center">
            <div className="container flex flex-col px-4 py-6 md:flex-row md:px-10 md:py-8 md:justify-center items-center rounded-3xl">
                <div className="px-4 py-2 animate__animated animate__fadeInLeft w-fit">
                <h1 className="text-5xl md:text-7xl font-Poppins font-bold md:pt-4 md:pb-2">
                    Opportunity Awaits</h1>
                <p className="w-auto font-NotoSansLaoLooped py-2">
                Whether you want to study, work, or build a new life, 
                Nu2Canada simplifies the immigration process for you with affordable guidance from experienced legal consultants, and many other services to fit your needs.
                </p>
                <button className="
                flex justify-center items-center bg-red-800
                 py-2 px-6 rounded-full hover:text-white border-l-2 
                 border-r-4 border-slate-900 border-b-4 hover:scale-105 transition ease-in-out">
                    DEMO
                </button>
                </div>
            <div className="animate__animated animate__fadeInRight animate__delay-1s">
            <img 
                src="/assets/toronto.svg" 
                alt="svg"
                className="w-96 md:w-auto md:py-10 sm:block" />
            </div>
            </div>
        </div>
    )
}

export default Landing
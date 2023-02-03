import React from "react";
import Logo from "/assets/Nu2Canada_Logo.svg"
import 'animate.css'
import { Link, Outlet } from "react-router-dom"
import { useState } from "react";

function Navigation() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className="bg-slate-50 pt-3 px-3 shadow-2xl static">
            <div 
                className="w-full h-auto text-black px-6 py-3 font-NotoSansLaoLooped font-semibold bg-white shadow-2xl rounded-3xl
                mx-auto flex items-center justify-between">
                <div className="flex flex-row justify-start">
                <Link to={"/"}>
                <img src={Logo} 
                     alt="logo" 
                     className="w-12"
                     />
                     </Link>
                <h1 className="pl-2 pt-3 md-pt-2 font-extrabold text-lg md:text-2xl font-FuzzyBubbles hidden md:block">
                <Link to={"/"}>
                    Nu2Canada
                    </Link>
                    </h1>
                </div>
                <div className="flex flex-row">
                <ul className="hidden md:flex flex-row justify-between items-center w-48 pr-8 gap-2">
                    <li className=" border-2 border-white pl-2 pr-2 rounded hover:border-red-800 transition ease-in-out delay-100">
                        <Link to={"/"}>
                        HOME
                        </Link>
                    </li>
                    <li className="border-2 border-white pl-2 pr-2 rounded hover:border-red-800 transition ease-in-out delay-100">
                    <Link to={"/Bout"}>
                        ABOUT
                        </Link>
                        </li>
                </ul>
                <button className=" hidden md:flex md:justify-center md:items-center bg-red-800 
                py-2 px-8 rounded-full hover:scale-105 text-white transition ease-in-out border-slate-900 border-r-4 border-b-4 border-l-2">
                    <Link to={"/Contact"}>
                        CONTACT
                    </Link>
                </button>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor" 
                    className="w-6 h-6 md:hidden"
                    onClick={() => setShowMenu(!showMenu)}>
                    
                    <path 
                        fillRule="evenodd" 
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" 
                        clipRule="evenodd" />
                </svg>
                {showMenu && (
                <div className="absolute top-0 right-0 w-full y-auto z-10">
                    <div className="bg-slate-50 shadow-xl py-4 px-3 flex flex-col justify-center items-center rounded-2xl">
                        <div className="w-full h-auto text-black px-5 font-NotoSansLaoLooped font-semibold bg-white rounded-3xl
                mx-auto flex items-center justify-between shadow-xl">
                            <img 
                                src={Logo} 
                                alt="UofT Logo"
                                className="max-h-16 pl-1 pr-2 py-2" 
                            />  
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth={1.5} 
                                stroke="currentColor" 
                                className="w-6 h-6"
                                onClick={() => setShowMenu(false)}
                            >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M6 18L18 6M6 6l12 12" />
                            </svg>          
                        </div>
                        <ul className="flex flex-col justify-center items-center w-48 pr-8 gap-2">
                    <li className="p-2 pl-9 pt-8 rounded text-slate-900">
                        <Link to={"/"}>
                        HOME
                        </Link>
                    </li>
                    <li className="p-2 pl-9 rounded text-slate-900">
                    <Link to={"/Bout"}>
                        ABOUT
                        </Link>
                        </li>
                        <li className="p-2 pl-9 text-slate-900">
                        <Link to={"/Contact"}>
                        CONTACT
                        </Link>
                        </li>
                </ul>
                       
                    </div>
                </div>
            )}
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Navigation
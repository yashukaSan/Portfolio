"use client"

import {CodeXml, Server, Layers, Database } from 'lucide-react' 
import { useState } from 'react';

export default function Skills(){
    const [isHover, setIsHover] = useState(false);
    const [hoverCount, setHoverCount] = useState(NaN);

    return (
        <section className="h-screen overflow-hidden bg-[#505065]/80 flex flex-col justify-center items-center" >
            <h1
            onMouseEnter={()=>{setIsHover(true); setHoverCount(0)}}
            onMouseLeave={()=>{setIsHover(false); setHoverCount(NaN)}}
            className={isHover && hoverCount===0 ? "transition duration-400 from-red-500 to-red-500 via-yellow-300 border-t-sky-400 hover:border-t-12 mb-29 shadow-xl shadow-red-400 bg-linear-to-r border-y-4 rounded-full p-10 bg-clip-text text-transparent text-6xl font-bold lg:px-40 xl:px-70 " : "mb-29 bg-linear-to-r transition duration-400 border-y-4 border-red-400 rounded-full p-10 bg-clip-text text-transparent text-6xl font-bold from-sky-300 via-cyan-300 to-sky-400 lg:px-40 xl:px-70 "} >
                Technical Skills
            </h1>
            <ul className="grid lg:gap-3  xl-gap-10 gap-3 grid-cols-2 xl:grid-cols-4" >
            <li className="w-[45vw] transition duration-400 hover:bg-linear-to-r from-[#dd89] px-12 py-5 border rounded-3xl bg-[#182535] " onMouseEnter={()=>{setIsHover(true); setHoverCount(3)} } onMouseLeave={()=>{setIsHover(false); setHoverCount(NaN)}} >
                    <Database className={isHover && hoverCount===3 ? "md:w-16 md:h-16 text-bold text-red-400" : "md:w-16 md:h-16 text-bold text-cyan-400"} />
                    <h1 className={isHover && hoverCount===3 ? "text-5xl font-serif text-mauve-300" : "text-4xl font-bold"}>
                        <span className={isHover && hoverCount===3 ? "text-6xl font-serif text-white" : "text-5xl font-serif text-lime-400"} >M</span>ongoDB
                    </h1>
                    <p className={isHover && hoverCount===3 ? "text-xl text-pink-100 mt-3 " : "text-xl text-slate-400 mt-3"} >
                        Intermediate
                    </p>
                </li>
                <li className="w-[45vw] px-12 py-5 border transition duration-400 hover:bg-linear-to-r from-[#dd89] rounded-3xl bg-[#182535] " onMouseEnter={()=>{setIsHover(true); setHoverCount(4)} } onMouseLeave={()=>{setIsHover(false); setHoverCount(NaN)}} >
                    <Layers className={isHover && hoverCount===4 ? "md:w-16 md:h-16 text-bold text-red-400" : "md:w-16 md:h-16 text-bold text-cyan-400" } />
                    <h1 className={isHover && hoverCount===4 ? "text-5xl font-serif text-mauve-300" : "text-4xl font-bold"}>
                    <span className={isHover && hoverCount===4 ? "text-6xl font-serif text-white" : "text-5xl font-serif text-lime-400"} >E</span>xpress
                    </h1>
                    <p className={isHover && hoverCount===4 ? "text-xl text-pink-100 mt-3 " : "text-xl text-slate-400 mt-3"} >
                        Beginner
                    </p>
                </li>
                <li className="w-[45vw] transition duration-400 hover:bg-linear-to-r from-[#dd89] px-12 py-5 border rounded-3xl bg-[#182535] " onMouseEnter={()=>{setIsHover(true); setHoverCount(1)} } onMouseLeave={()=>{setIsHover(false); setHoverCount(NaN)}} >
                    <CodeXml className={isHover && hoverCount===1 ? "md:w-16 md:h-16 text-bold text-red-400" : "md:w-16 md:h-16 text-bold text-cyan-400"} />
                    <h1 className={isHover && hoverCount===1 ? "text-5xl font-serif text-mauve-300" : "text-4xl font-bold hover:text-black"}>
                    <span className={isHover && hoverCount===1 ? "text-6xl font-serif text-white" : "text-5xl font-serif text-lime-400"} >R</span>eact
                    </h1>
                    <p className={isHover && hoverCount===1 ? "text-xl text-pink-100 mt-3 " : "text-xl text-slate-400 hover:text-slate-900 mt-3"} >
                        Advanced
                    </p>
                </li>
                <li className="w-[45vw] transition duration-400 hover:bg-linear-to-r from-[#dd89]  px-12 py-5 border rounded-3xl bg-[#182535] " onMouseEnter={()=>{setIsHover(true); setHoverCount(2)} } onMouseLeave={()=>{setIsHover(false); setHoverCount(NaN)}} >
                    <Server className={isHover && hoverCount===2 ? "md:w-16 md:h-16 text-bold text-red-400" : "md:w-16 md:h-16 text-bold text-cyan-400"} />
                    <h1 className={isHover && hoverCount===2 ? "text-5xl font-serif text-mauve-300" : "text-4xl font-bold"}>
                    <span className={isHover && hoverCount===2 ? "text-6xl font-serif text-white" : "text-5xl font-serif text-lime-400"} >N</span>ode.js
                    </h1>
                    <p className={isHover && hoverCount===2 ? "text-xl text-pink-100 mt-3 " : "text-xl text-slate-400 mt-3"} >
                        Intermediate
                    </p>
                </li>
                
            </ul>
        </section>
    )
}

export default function Hero(){
    return (
        <section >
            <section className="bg-radial-[at_50%_35%] from-[#235940] via-[#022458] to-[#082539] h-screen flex flex-col justify-center mt-[100px] relative items-center align-center text-center" >
                <div className="text-[#e2e3e0] text-7xl lg:text-9xl mb-12 flex flex-wrap font-sans font-bold justify-center" >
                    MERN Stack <br />
                    <span className="bg-[radial-gradient(circle_at_center,cyan,rgb(52,212,218),cyan)] text-transparent bg-clip-text from-[rgb(0,100,90)] via-cyan-400 to-[rgb(0,12,100)] " >
                        Software Developer{" "}
                    </span>
                </div>
                <p className="text-2xl p-2 font-semibold text-[#afafaf] leading-relaxed " >
                    Crafting fluid digital experience with MongoDB, Express, React, and Node.js. Engineering scable solution with modern aesthetics.
                </p>
                <div className="m-12 flex gap-12" >
                    <button className="border px-6 hover:bg-[#e9e9e9] focus:border-red-400 focus:text-purple-400 text-cyan hover:text-cyan-500 py-5 rounded-3xl font-bold bg-linear-to-tr from-cyan-400 via-[rgb(0,100,090)] to-cyan-500 text-2xl "> 
                        View All Projects
                    </button>
                    <button className="border px-8 rounded-3xl text-2xl">
                        Get In Touch
                    </button>
                </div>
            </section>
            <section className="bg-[#102045] h-screen flex justify-center items-center " >
                <div >
                    <span className="flex justify-center text-4xl pt-12 font-bold text-cyan-400  " >
                        INTRODUCTION
                    </span>
                    <p className="bg-[#102045] border m-8 p-10 text-3xl font-semibold rounded-4xl text-slate-400 leading-relaxed " >
                        I build scalable maintainable web applications using React/Next.js and the 
                        PERN stack, with a focus on performance, accessibility, and clean component 
                        architecture. Recent projects include a Sales Analytics Platform optimized for large datasets, 
                        Mini Laundry Order Management System in which users can order and track their clothes, also get 
                        their complete date.
                    </p>
                </div>
                <section>
                    <div>
                        
                    </div>
                    <div></div>
                </section>
            </section>
        </section>
    )
}
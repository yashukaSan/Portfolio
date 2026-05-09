import {Dot, GitCommitVertical} from 'lucide-react'

export default function Experience(){
    const mainClass = `h-screen bg-linear-to-tl from-[#d09]
     via-[dd69] grid justify-center text-center items-center text-4xl `;
    return(
        <section className={mainClass}>
            <h2 className="text-8xl hover:shadow-2xl hover:shadow-white border-t-blue-400 border-b-red-500 text-white font-serif underline decoration-black underline-offset-8 border-y-5 py-6 rounded-full mx-16" >
                Experience
            </h2>
            <section className=" border flex h-[40vh] " >
                <div>
                    <h1>
                        Frontend Developer Intern
                    </h1>
                    <h3>
                        Springer Capital, USA <Dot /> Internship
                    </h3>
                    <p>
                        Design website layout, Create and developed the website components, manage the github repository.
                        Collaborate with the collegues and work in the projects assigned by the company.
                    </p>
                </div>
                
                <div></div>
                <div>
                <div className="w-60 flex h-full border align-center items-center justify-center" >
                    <hr className="h-100 w-[40vh] translate transform rotate-90 right-[10vw] absolute" />
                    <Dot className="h-50 w-50 right-[7.64vw] absolute" />
                    <p></p>
                    <p className="w-40 text-right text-xl" >
                        February 2026 <br/>- Present
                    </p>
                </div>
                
                    
                </div>
            </section>
        </section>
    )
}
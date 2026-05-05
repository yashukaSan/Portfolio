import {CodeXml, Server, Layers, Database } from 'lucide-react' 

export default function Skills(){
    return (
        <section className="h-screen bg-[#505065]/80 flex flex-col justify-center items-center" >
            <h1 className="mb-19 bg-linear-to-r bg-clip-text text-transparent text-6xl font-bold from-sky-300 via-cyan-300 to-sky-400 " >
                Techncal Skills
            </h1>
            <ul className="grid gap-10 " >
                <li className="w-[85vw] px-12 py-5 border rounded-3xl bg-[#182535] " >
                    <CodeXml className="text-4xl text-bold my-3 text-cyan-400" size={60} />
                    <h1 className="text-4xl font-bold">
                        React
                    </h1>
                    <p className="text-xl text-slate-400 mt-3" >
                        Advanced
                    </p>
                </li>
                <li className="w-[85vw] px-12 py-5 border rounded-3xl bg-[#182535] " >
                    <Server className="text-4xl text-bold my-3 text-cyan-400" size={60} />
                    <h1 className="text-4xl font-bold">
                        Node.js
                    </h1>
                    <p className="text-xl text-slate-400 mt-3" >
                        Intermediate
                    </p>
                </li>
                <li className="w-[85vw] px-12 py-5 border rounded-3xl bg-[#182535] " >
                    <Database className="text-4xl text-bold my-3 text-cyan-400" size={60} />
                    <h1 className="text-4xl font-bold">
                        MongoDB
                    </h1>
                    <p className="text-xl text-slate-400 mt-3" >
                        Intermediate
                    </p>
                </li>
                <li className="w-[85vw] px-12 py-5 border rounded-3xl bg-[#182535] " >
                    <Layers className="text-4xl text-bold my-3 text-cyan-400" size={60} />
                    <h1 className="text-4xl font-bold">
                        Express
                    </h1>
                    <p className="text-xl text-slate-400 mt-3" >
                        Beginner
                    </p>
                </li>
            </ul>
        </section>
    )
}
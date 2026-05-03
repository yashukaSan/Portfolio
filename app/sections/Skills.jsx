import {CodeXml, Server, Layers, Database } from 'lucide-raect' 

export default function Skills(){
    return (
        <section>
            <h1>
                Techncal Skills
            </h1>
            <ul>
                <li>
                    <CodeXml />
                    <h1>
                        React
                    </h1>
                    <p>
                        Advanced
                    </p>
                </li>
                <li>
                    <Server />
                    <h1>
                        Node.js
                    </h1>
                    <p>
                        Intermediate
                    </p>
                </li>
                <li>
                    <Database />
                    <h1>
                        MongoDB
                    </h1>
                    <p>
                        Intermediate
                    </p>
                </li>
                <li>
                    <Layers />
                    <h1>
                        Express
                    </h1>
                    <p>
                        Beginner
                    </p>
                </li>
            </ul>
        </section>
    )
}
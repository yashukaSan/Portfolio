import {Dot} from "lucide-react";

export default function Education(){
    const education = [
        ['Bachelor of Computer Applications', '2024 - 2027',
         'S.R. College of Professional Studies', "Bundelkhand University",
         "Focused on Software engineering, Data Structure, and Web Technologies"],
        ['Higher Secondary Education', '2022 - 2024', 'Kendriya Vidyalay Datia',
          'CBSE', "Completed Higer Secondary Education with PCM and CS with 84.2%"
        ]
    ];
    return (
        <section>
            <h1>
                Education
            </h1>
            <ul>
                {education.map((item, ind)=> (
                    <li key={ind}>
                        <div>
                            <h1>
                                {item[0]}
                            </h1>
                            <p>{item[1]}</p>
                        </div>
                        <p>{item[2]} <Dot /> {item[3]}</p>
                        <p>{item[4]}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}
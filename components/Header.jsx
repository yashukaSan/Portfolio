import {Sun, Moon, Menu} from 'lucide-react';
import {useState} from 'react';
import { motion } from "motion/react";


export default function Header(){
    const [isDark, setIsDark] = useState(false);
    
    const sections= ['home', 'about', 'experience', 'projects', 'contact'];

    return (
        <motion.section
         className="box bg-[#0a0a0a]"
         intial="visible"
        //  animate={ { x: -200 }}
         animate= "hidden"
         variant={
            {
                active:{ 
                    backgroundColor: "#787878" 
                },
                inactive:{ 
                    backgroundColor: "#282828", 
                    transition: {duration: 2}}
            }
         }
         whileInView={{ opacity: 2}}
         scrollDown
         style={{ y: 500 }}
         >
            <div>
                Portfolio
            </div>
            <div>
                <motion.ul className="lg:hidden" initial="false" animate={{ x:2500 }} >
                    {sections.map((item, ind)=>(
                        <li key={item+'-'+ind}>
                            {item}
                        </li>
                    ))}
                    <li onClick={()=>setIsDark(prev=> !prev)} >
                        {isDark? <Sun /> : <Moon />}
                    </li>
                    <li className="lg:hidden" >
                        <Menu />
                    </li>

                </motion.ul>
            </div>
        </motion.section>
    )
}
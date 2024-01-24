import './MySkills.css';

import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaNode } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiMongoose } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { useState } from 'react';
import Onhover from './OnHoverSkills';


function MySkills(){
    
    let skills=[{
        url:<FaHtml5 size={60}/>,
        name: "HTML"
    },
    {
        url:<IoLogoCss3 size={60}/>,
        name: "CSS"
    },
    {
        url:<TbBrandJavascript size={60}/>,
        name: "JavaScript"
    },
    {
        url:<FaReact size={60}/>,
        name: "React"
    },
    {
        url:<FaNode size={60}/>,
        name: "Node JS"
    },
    {
        url:<SiExpress size={60}/>,
        name: "Express JS"
    },
    {
        url:<DiMongodb size={60}/>,
        name: "MongoDB"
    },
    {
        url:<SiMongoose size={60}/>,
        name: "Mongoose"
    },
    {
        url:<FaJava size={60}/>,
        name: "JAVA"
    },
    {
        url:<FaDatabase size={60}/>,
        name: "MySQL"
    },
]
    return (
        <div className='skillscontainer' >
            <h1 className='my'>My  </h1>
            <h1 className='skillsheading'>Skills</h1>
            <div className='skills' >
            {skills.map((i,index)=>(

            <Onhover key={index} i={i}/>
            ))}
            </div>
        </div>
    )
}

export default MySkills;
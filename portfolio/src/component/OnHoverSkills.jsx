import { useState } from "react";
import { BsCursor } from "react-icons/bs";

function Onhover({i}){
    const [set,setState]=useState("white");
    const [color,setColor]=useState("black");
    const [shadow,setShadow]=useState("inset 1px 1px 8px black");
    return (
            <div className='skillsdiv' style={{background:set,color:color, boxShadow: shadow}} 
            onMouseEnter={()=> {
                setState("black")
                setColor("white")
                setShadow("inset 1px 1px 8px white");
                }} 
            onMouseLeave={()=> {
                setState("white")
                setColor("black")
                setShadow("inset 1px 1px 8px black");
                }}>
                <div className='url'>{i.url}</div>
                <div className='name'>{i.name}</div>
            </div>
            )
}

export default Onhover;
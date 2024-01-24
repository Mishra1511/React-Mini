import { useState } from "react";
import { BsCursor } from "react-icons/bs";

function Onhover({i}){
    const [set,setState]=useState("white");
    const [color,setColor]=useState("black");
    return (
            <div className='skillsdiv' style={{background:set,color:color}} 
            onMouseEnter={()=> {
                setState("black")
                setColor("white")
                }} 
            onMouseLeave={()=> {
                setState("white")
                setColor("black")
                }}>
                <div className='url' >{i.url}</div>
                <div className='name'>{i.name}</div>
            </div>
            )
}

export default Onhover;
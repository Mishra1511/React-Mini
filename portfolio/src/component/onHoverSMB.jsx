import { useState } from "react";
import styles from './SocialmediaButton.module.css'

function OnhoverSMB({i}){
    const [set,setState]=useState("white");
    const [color,setColor]=useState("black");
    const [shadow,setShadow]=useState("inset 1px 1px 8px black");
    return (
            <div  className={styles.SMBcontainer} style={{background:set,color:color,boxShadow:shadow}} 
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
                
                <a style={{color:color}} target="_blank" href={i.link}>{i.url}</a>
            </div>
            )
}

export default OnhoverSMB;
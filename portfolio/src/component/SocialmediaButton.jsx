
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoCubeOutline } from "react-icons/io5";
import { RiLinkedinFill } from "react-icons/ri";
import styles from './SocialMediaButton.module.css'
import { useEffect, useState } from "react";
import OnhoverSMB from "./onHoverSMB";


function SocialmediaButton(){
    const [color,setColor]=useState("white");
    const [background,setBackground]=useState("black");
const array=[{ url:<IoCubeOutline style={{marginTop:'16%'}} size={45}/>, link:'https://www.scaler.com/academy/profile/5ef9c165c11c/ '
},{url:<RiLinkedinFill style={{marginTop:'15%'}} size={45}/>, link:'https://www.linkedin.com/in/shruti-mishra-8663601a1/' 
},{url:<FaGithub style={{marginTop:'18%'}} size={40}/>, link:'https://github.com/Mishra1511'
},{url:<SiLeetcode style={{marginTop:'18%'}} size={40}/>, link:'https://leetcode.com/shruti_mishraaaaaa/'
}]

    return (<span className={styles.smspan} >
         
         {array.map((element)=>(
            <div className={styles.maincontainer}>
                <OnhoverSMB  i={element} />
            </div>
       
   ))}
         {/* </div> */}
       
        
       
    </span>
    );
}

export default SocialmediaButton;
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaCube } from "react-icons/fa6";



function SocialmediaButton(){
    return (<span>
        <br/>
        <br />
        <a style={{ marginRight: '20px' }}><FaCube size={50}/> </a>
        <a style={{ marginRight: '20px' }}><FaLinkedin size={50}/></a>
        <a style={{ marginRight: '20px' }}><FaGithub size={50}/></a>
        <a style={{ marginRight: '20px' }}><SiLeetcode size={50}/></a>
    </span>
    );
}

export default SocialmediaButton;
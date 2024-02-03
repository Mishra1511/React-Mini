import './NavBar.css'
import { FaDownload } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import {Link} from 'react-scroll';
import Shruti from'../assets/Shruti Mishra React.pdf';


function NavBar(){

    return(
        <nav className='navbar'>
            <div className="inlinenav">
            <Link href='' to='Home' spy={true} smooth={true} offset={0} duration={500} className="h3port">
                <span>
                    <BsPersonWorkspace/>
                </span> Portfolio</Link>
                
            <Link href='' to='AboutMe' spy={true} smooth={true} offset={-50} duration={500} className="nav">About Me</Link>
            <Link href='' to='Skills' spy={true} smooth={true} offset={-80} duration={500} className="nav">Skills</Link>
            <Link href='' to='Proects' spy={true} smooth={true} offset={-50} duration={500} className ="nav">Projects</Link>
            <Link href='' to='Contact' spy={true} smooth={true} offset={-40} duration={500} className="nav">Contact</Link>
            
            <button className="resume">
            <a href={Shruti} download='Shruti Mishra React'> Resume
            <span className='resumeicon'>
            <FaDownload/>
            </span>
            </a>
            </button>
            
            
            </div>
        </nav>
    )
}

export default NavBar;
import './NavBar.css'
import { FaDownload } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";



function NavBar(){

    return(
        <nav>
            <div className="inlinenav">
            <h3 className="h3port">
                <span>
                    <BsPersonWorkspace/>
                    </span> Portfolio</h3>
            <a className="nav">About Me</a>
            <a className="nav">Skills</a>
            <a className ="nav">Projects</a>
            <a className="nav">Contact</a>
            <button className="resume">Resume
            <span className='resumeicon'>
            <FaDownload/>
            </span>
            </button>
            
            </div>
        </nav>
    )
}

export default NavBar;
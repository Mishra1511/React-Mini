import './NavBar.css'

function NavBar(){

    return(
        <nav>
            <span className="inlinenav">
            <h3 className="h3port">Portfolio</h3>
            <a className="nav">About Me</a>
            <a className="nav">Skills</a>
            <a className="nav">Projects</a>
            <a className="nav">Contact</a>
            <button className="resume">Resume</button>
            </span>
        </nav>
    )
}

export default NavBar;
import './NavBar.css'

function NavBar(){

    return(
        <nav>
            <div className="inlinenav">
            <h3 className="h3port">Portfolio</h3>
            <a className="nav">About Me</a>
            <a className="nav">Skills</a>
            <a className ="nav">Projects</a>
            <a className="nav">Contact</a>
            <button className="resume">Resume</button>
            </div>
        </nav>
    )
}

export default NavBar;
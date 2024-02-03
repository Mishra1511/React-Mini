import Banner from'../assets/Banner.png';
import './home.css'
import SocialmediaButton from './SocialmediaButton.jsx';

function Home(){

    return(
        <div id='Home' className='container'>
            <div className='homedescription'>
                <div className='content'>
                    <h1 className='hello'>Hello! I'am </h1>
                    <h1 className='myname'>Shruti Mishra.</h1>
                    <br/>
                    <h1 className='frontend'>Frontend </h1>
                    <h1 className='Developer'>Developer</h1>
                    <br/>
                    <h1 className='based'>Based in </h1>
                    <h1 className='india'>India.</h1>
                    <p>I specialize in web development, proficient in crafting sophisticated interfaces using HTML, CSS, and JavaScript. My expertise extends to React for dynamic single-page applications. Venturing into full-stack proficiency, I've mastered Node.js and Express.js, ensuring seamless server-side development. I possess a comprehensive understanding of RESTful APIs, databases, and version control. Actively engaged in the developer community, I stay abreast of industry trends through conferences and open-source contributions. Committed to excellence, I am poised to contribute to impactful digital solutions with a focus on precision and innovation.</p>
                </div>
                < span className='socialmedia'>
                <SocialmediaButton />
                </span>
            </div>
            <div className='Bannerimage'>
            <img src={Banner} />
            </div>
            
        </div>
    )
}

export default Home;
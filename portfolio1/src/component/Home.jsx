import Banner from'../assets/Banner.png';
import './home.css'

function Home(){

    return(
        <div className='container'>
            <div className='homedescription'>
                <div className='content'>
                    <h1 className='hello'>Hello! I'am </h1>
                    <h1 className='name'>Shruti Mishra.</h1>
                    <br/>
                    <h1 className='frontend'>Frontend </h1>
                    <h1 className='Developer'>Developer</h1>
                    <br/>
                    <h1 className='based'>Based in </h1>
                    <h1 className='india'>India.</h1>
                </div>
                < spnan className='socialmedia'>
                </spnan>
            </div>
            <div className='Bannerimage'>
            <img src={Banner} />
            </div>
            
        </div>
    )
}

export default Home;
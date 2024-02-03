import styles from './AboutMe.module.css';
import Photo from '../assets/Photo.png';

function AboutMe(){

    return(
        <div id='AboutMe' className={styles.divcontainer}>
            <div className={styles.image}>
                <img src={Photo}/>
            </div>
            <div className={styles.Content}>
                 <div className={styles.heading}>
                    <h1 className={styles.about}>About </h1>
                    <h1 className={styles.me}> Me</h1>
                 </div>
                <div className={styles.para}>
                    <p>Hey there! I'm Shruti Mishra, a software engineer with 2.5 years of experience, currently thriving in the vibrant realm of web development at HCL Technologies. My journey in this dynamic field has been nothing short of exhilarating. In my role, I craft web experiences using a blend of HTML, CSS, JavaScript, and React. Whether it's building sleek user interfaces or wrangling APIs to communicate with databases.</p>
                    
                    <p>I'm constantly pushing boundaries to create seamless digital solutions. What sets me apart is my passion for collaboration. I thrive in diverse teams, where ideas flow freely and creativity knows no bounds. Communication is key, and I make it a priority to ensure everyone is on the same page, driving towards shared objectives.</p>
                    
                    <p>Beyond the confines of code, I'm an avid explorer of technology's endless possibilities. From diving into the latest tech trends to unwinding with outdoor adventures, I believe in striking a balance between work and play. But it's not just about the tech – it's about the impact we make. I'm driven by the belief that technology has the power to transform lives and solve real-world challenges. It's this sense of purpose that fuels my dedication to continuous learning and growth. Thanks for stopping by! I'm excited about the journey ahead and the opportunity to collaborate on innovative projects that make a difference. Let's connect and embark on this exciting adventure together!</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
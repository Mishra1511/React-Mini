import styles from './Projects.module.css';
import Pro1 from '../assets/Pro1.png'
import Pro2 from '../assets/Pro2.png'
import Pro3 from '../assets/Pro3.png'
import ProjectLeft from './ProjectsLeft.jsx';
import ProjectRight from './ProjectRight.jsx';



function Projects(){
    const ProjectsClassifications=[{
        position:'left',
        image:Pro1,
        id:'01',
        name:'Portfolio',
        desciption:"Explore my portfolio website! Crafted with HTML, CSS, JavaScript, and React, it's a captivating showcase of my skills and projects. With sleek design and intuitive navigation, visitors delve into my professional journey effortlessly. Experience innovation and creativity firsthand in this personalized digital platform.",
    },
{
        position:'right',
        image:Pro2,
        id:'02',
        name:'Tic Tac Toe',
        desciption:"Discover the ultimate Tic Tac Toe experience! Powered by HTML, CSS, JavaScript, and React, this game offers seamless interaction and engaging gameplay. With dynamic visuals and intuitive controls, players immerse themselves in strategic battles. Experience classic fun with modern flair in this captivating digital rendition.",
},
{       position:'left',
        image:Pro3,
        id:'03',
        name:'Kanban Board',
        desciption:"Introducing my dynamic Kanban board! Crafted with HTML, CSS, JavaScript, and React, it's a versatile tool for organizing tasks and workflows. With drag-and-drop functionality and real-time updates, users seamlessly manage projects and collaborate effectively. Experience efficiency and clarity in project management with this innovative digital solution.",
}]

    return(

        <div id='Proects' className={styles.Project}>
            
            <div className={styles.headings}>
                <h1 className={styles.my}>My </h1>
                <h1 className={styles.pro}> Projects</h1>
            </div>

            {ProjectsClassifications.map((index,key)=>(
               index.position == 'left' ?
                    <ProjectLeft key={key} index={index}/> : <ProjectRight key={key} index={index}/>
            ))}

        </div>
    )
}

export default Projects;
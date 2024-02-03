import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import styles from './Projects.module.css';

function ProjectRight({index}){
    return(
        <div className={styles.Project2}>
                
        <div className={styles.Project2Content}>
            <h1>{index.id}</h1>
            <h2>{index.name}</h2>
            <p>{index.desciption}</p>
            <FaArrowUpRightFromSquare/>
        </div>
        <div className={styles.image2}>
            <img src={index.image}/>
        </div>
    </div>

    )
}

export default ProjectRight;
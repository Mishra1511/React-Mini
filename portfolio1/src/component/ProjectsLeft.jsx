import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import styles from './Projects.module.css';

function ProjectLeft({index}){
    return (
        <div className={styles.Project1}>
            
                <div className={styles.image1}>
                    <img src={index.image}/>
                </div>
                <div className={styles.Project1Content}>
                    <h1>{index.id}</h1>
                    <h2>{index.name}</h2>
                    <p>{index.desciption}</p>
                    <FaArrowUpRightFromSquare/>
                </div>
        </div>
    )
}

export default ProjectLeft;
import styles from './Footer.module.css';
import { BsPersonWorkspace } from "react-icons/bs";

function Footer(){
    return (
        <div className={styles.maindiv}>
            <div className={styles.insidDiv}>
                <h3 className={styles.portfolio}>
                    <span className={styles.icon}><BsPersonWorkspace/></span>
                    Portfolio</h3>

                <h5 className={styles.dd}>Designed and Developed by</h5>
                <h4 className={styles.name} href="">Shruti Mishra</h4>
            </div>
        </div>
    )
}

export default Footer;

import styles from './Contact.module.css';
import HandleForm from './Form';

function ContactMe(){
    
    return (
        <div id='Contact' className={styles.maindiv}>
            <h1 className={styles.heading}>Contact</h1>
            <div className={styles.divcontainer}>
                <div className={styles.form}>
                    <HandleForm/>
                </div>
                <div className={styles.Content}>
                    <h1 className={styles.lets}>Let's </h1>
                    <h1 className={styles.talk}>talk </h1>
                    <h1 className={styles.for}>for</h1>
                    <br/>
                    <h1 className={styles.something}>Something Special</h1>
                    <p>Need to get in touch? Feel free to drop a line! Whether it's a question, collaboration opportunity, or just a friendly hello, I'm all ears. Let's connect!</p>
                    <h3 className={styles.myemail}>shruti.mish1511@gmail.com</h3>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;
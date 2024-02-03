import React, { useState } from 'react';
import styles from './Contact.module.css';

function HandleForm(){
    const [res,setRes]=useState(true);
    const [formData, setFormData] = useState({name: '',email: '',message: ''});
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSf2fRIWER3SfaDCSrHOXXrmZsdzPAtmprOyqo-CJt6jH0iYJw/formResponse'; // Replace with your Google Form URL
        const { name, email, message } = formData;
    
        const formDataToSend = new FormData();
        formDataToSend.append('entry.2005620554', name); // Replace with your form entry IDs
        formDataToSend.append('entry.1045781291', email);
        formDataToSend.append('entry.839337160', message);
    
        try {
          const response = await fetch(formUrl, {
            method: 'POST',
            body: formDataToSend,
            mode: 'no-cors' // This prevents CORS errors
          });
          setRes(response.ok);
        } catch (error) {
          
        }
      };
    
      return (
        <div>
            {(res)?
            <form className={styles.form} onSubmit={handleSubmit}>
              <input required className={styles.name} type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
              <input required className={styles.email} type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
              <textarea className={styles.message} name="message" placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>
              <button className={styles.btn} type="submit">Get In Touch</button>
            </form> : 
             <h1 style={{marginTop:'12%'}}>Thanks for your Reponse!</h1>}
            
        </div>
        
      );
}
export default HandleForm;
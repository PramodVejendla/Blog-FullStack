import Image from "next/image";
import styles from "./contact.module.css";

function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <input type="text" placeholder="Name and Surname" />
        <input type="email" placeholder="Email Address" />
        <input type="number" placeholder="Phone Number (optional)" />
        <textarea cols={30} rows={10} placeholder="Message"></textarea>
        <button className={styles.btn}>Send</button>
      </div>
    </div>
  );
}

export default ContactPage;

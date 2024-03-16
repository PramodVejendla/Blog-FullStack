import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}> Pramod </div>
      <div className={styles.text}>
        Pramod creative thoughts @ All right reserved
      </div>
    </div>
  );
}

export default Footer;

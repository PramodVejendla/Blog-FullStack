import Image from "next/image";
import React from "react";
import styles from "./about.module.css";

function AboutPage() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subTitle}>About Agency</h2>
          <h1 className={styles.title}>
            We create digital ideas that are bigger, bolder, braver and better
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sed
            corporis iure cum quo ad consequuntur neque totam quaerat, quas
            aliquam laudantium maiores aut fuga voluptatum. Ipsum distinctio
            saepe quod?
          </p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Years of Experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Years of Experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/about.png" alt="" fill className={styles.img} />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

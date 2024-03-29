import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

function PostCard() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/tuba.jpg" alt="" fill className={styles.img} />
        </div>
        <span className={styles.date}>18.03.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Lorem ipsum dolor</p>
        <Link className={styles.link} href="/blog/post">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default PostCard;

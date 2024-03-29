import Image from "next/image";
import styles from "./singlePostPage.module.css";

function SinglePostPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/tuba.jpg" alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <div className={styles.avatar}>
            <Image src="/noavatar.png" alt="" fill className={styles.img} />
          </div>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Author Name</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>Published Date</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
          possimus sequi eum soluta? Vitae fugiat esse totam aspernatur
          temporibus accusantium!
        </div>
      </div>
    </div>
  );
}

export default SinglePostPage;

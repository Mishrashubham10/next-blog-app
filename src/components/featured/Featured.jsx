import styles from './features.module.css';
import Image from 'next/image';

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>
        Hey, Shubham dev here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        {/* Image */}
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        {/* Text */}
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className={styles.postDesc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis similique optio aut modi unde assumenda, consequatur expedita officiis itaque ipsa sed provident, earum aliquid impedit?
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
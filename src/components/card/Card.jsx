import styles from './card.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Card = () => {
  return (
    <div className={styles.container}>
      {/* Image */}
      <div className={styles.imgContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      {/* Text */}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
            <span className={styles.date}>30.12.2023 -</span>
            <span className={styles.category}>Culture</span>
        </div>
        <Link href="/">
        <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        </Link>
        <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum eius eos facilis nisi, neque consequuntur corrupti cumque animi error debitis accusamus ipsam repellat eaque quia soluta repudiandae est alias? Voluptas?
        </p>
        <Link href="/" className={styles.link}>
            Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;

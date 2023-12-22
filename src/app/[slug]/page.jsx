import Menu from '@/components/menu/Menu';
import styles from './singlePage.module.css';
import Image from 'next/image';
import Comments from '@/components/comments/Comments';

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Shubham</span>
              <span className={styles.date}>30.12.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p className={styles.desc}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
              rem animi molestias, laboriosam id aliquam asperiores officia
              maxime soluta iure recusandae autem quis quidem quam obcaecati
              possimus eum molestiae. Quia, vitae nobis! Iste, quasi fugit.
            </p>
            <p className={styles.desc}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
              rem animi molestias, laboriosam id aliquam asperiores officia
              maxime soluta iure recusandae autem quis quidem quam obcaecati
              possimus eum molestiae. Quia, vitae nobis! Iste, quasi fugit.
            </p>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p className={styles.desc}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
              rem animi molestias, laboriosam id aliquam asperiores officia
              maxime soluta iure recusandae autem quis quidem quam obcaecati
              possimus eum molestiae. Quia, vitae nobis! Iste, quasi fugit.
            </p>
            <p className={styles.desc}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
              rem animi molestias, laboriosam id aliquam asperiores officia
              maxime soluta iure recusandae autem quis quidem quam obcaecati
              possimus eum molestiae. Quia, vitae nobis! Iste, quasi fugit.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;

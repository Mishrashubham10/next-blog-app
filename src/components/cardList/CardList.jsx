import Card from '../card/Card';
import Pagination from '../pagination/Pagination';
import styles from './cardList.module.css';
import Image from 'next/image';

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      {/* Pagination */}
      <Pagination />
    </div>
  )
}

export default CardList
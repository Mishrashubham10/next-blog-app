import Featured from '@/components/featured/Featured';
import styles from './page.module.css';
import Link from 'next/link';
import CategoryList from '@/components/categoryList/CategoryList';
import CardList from '@/components/cardList/CardList';
import Menu from '@/components/menu/Menu';

export default function Home() {
  return (
    <main className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </main>
  )
};
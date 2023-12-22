import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import AuthLinks from '../authLinks/AuthLinks';
import ThemeToggle from '../themeToggle/ThemeToggle';

const Navbar = () => {
  return (
    <nav className={styles.container}>
      {/* Social */}
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="facebook" width={24} height={24} />
        <Image src="/tiktok.png" alt="facebook" width={24} height={24} />
        <Image src="/youtube.png" alt="facebook" width={24} height={24} />
      </div>
      {/* Logo */}
      <div className={styles.logo}>Shubhamblog</div>
      {/* Links */}
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        <Link href="/" className={styles.link}>
          Contact
        </Link>
        <Link href="/" className={styles.link}>
          About
        </Link>
        <AuthLinks />
      </div>
    </nav>
  );
};

export default Navbar;
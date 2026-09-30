import Link from "next/link";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Addis Eats</h1>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>
          Home
        </Link>
        <Link href="/menu" className={styles.navLink}>
          Menu
        </Link>
        <Link href="/cart" className={styles.navLink}>
          Cart
        </Link>
      </nav>
    </div>
  );
}
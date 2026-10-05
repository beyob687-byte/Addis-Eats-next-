import Link from "next/link";
import styles from "./header.module.css";
export default function Header() {
    return(
        <div className={styles.header}>
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
    )
}
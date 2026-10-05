import styles from "./footer.module.css";
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    <h2 className={styles.title}>Addis Eats</h2>
                    <p className={styles.description}>Delivering delicious food to your doorstep.</p>
                </div>
                <nav className={styles.nav}>
                    <a href="/" className={styles.navLink}>Home</a>
                    <a href="/menu" className={styles.navLink}>Menu</a>
                    <a href="/contact" className={styles.navLink}>Contact</a>
                </nav>
            </div>
            <div className={styles.bottom}>
                <p>&copy; 2023 Addis Eats. All rights reserved.</p>
            </div>
        </footer>
    )
}
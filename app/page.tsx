import styles from "./app.module.css";
import Link from "next/link";
export default function HomePage() {
  return (
    <div >
  
<main className={styles.main}>
  <section className={styles.hero}>
    <h1>Welcome to Addis Eats</h1>

    <p>
      Discover delicious meals from your favorite restaurants in Addis Ababa.
      Order your favorite food and enjoy it from the comfort of your home.
    </p>

    <Link href="/menu" className={styles.button}>
      Explore Menu
    </Link>
  </section>

  <section className={styles.about}>
    <h2>Good Food, Easy Ordering</h2>

    <p>
      Addis Eats makes it simple to find your favorite meals, add them to your
      cart, and place your order quickly and easily.
    </p>
  </section>
</main>
```
      
    </div>
  );
}
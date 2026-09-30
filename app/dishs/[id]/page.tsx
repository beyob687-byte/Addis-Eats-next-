import { menuData } from '@/data/data'
import styles from './dish.module.css'

export default async function DishDetail({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const dish = menuData.find((item) => item.id === Number(id))

  if (!dish) {
    return (
      <div className={styles.notFound}>
        <h1>Dish Not Found</h1>
        <p>No item exists with ID: {id}</p>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{dish.name}</h1>
      <h2 className={styles.price}>${dish.price}</h2>

      <div className={styles.badgeContainer}>
        <span className={styles.category}>{dish.category}</span>
        <span className={dish.isSpicy ? styles.spicy : styles.mild}>
          {dish.isSpicy ? "🌶️ Spicy" : "Mild"}
        </span>
      </div>

      <p className={styles.description}>{dish.description}</p>
    </div>
  )
}

'use client'

import { menuData } from '@/data/data'
import { useRouter } from 'next/navigation'
import styles from './menu.module.css'

export default function Menu() {
  if (!menuData) {
    return <h1 className={styles.notFound}>Data not found</h1>
  }

  const router = useRouter()

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Menu</h1>

      <div className={styles.grid}>
        {menuData.map((data) => (
          <div key={data.id} className={styles.card}>
            <div>
              <h2 className={styles.cardTitle}>{data.name}</h2>
              <div className={styles.metaRow}>
                <span className={styles.price}>${data.price}</span>
                <div className={styles.tags}>
                  <span className={styles.category}>{data.category}</span>
                  <span className={data.isSpicy ? styles.spicy : styles.mild}>
                    {data.isSpicy ? '🌶️ Spicy' : 'Mild'}
                  </span>
                </div>
              </div>
            </div>

            <button
              className={styles.button}
              onClick={() => router.push(`/dishs/${data.id}`)}
            >
              Detail
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
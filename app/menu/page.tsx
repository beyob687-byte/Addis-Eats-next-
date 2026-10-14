
'use client'

import useSwr from 'swr'
import {fetcher} from '@/data/fetcher'
import { menuData } from '@/data/data'
import { useRouter } from 'next/navigation'
import styles from './menu.module.css'
import {useState} from 'react'


export default function Menu({currncy="ETB"}: {currncy?: string}) {

  const [params, setParams] = useState("All");

 
 const router = useRouter()

 const {data,error,isLoading} = useSwr('/api/dishes',fetcher);
 const dish = params === "All" ? data : data.filter((item) => item.category === params);
 if (isLoading){
  return <p>Loading Dishes....</p>
 }
 if (error){
  return <div><p>failed to laod dishs</p>
  <button className={styles.button} onClick={() => router.back()}>Back</button></div>
 }
 
 
 
 return( 

  
    <div className={styles.container}>
      <h1 className={styles.title}>{params}</h1>
     <div className={styles.buttonContainer}>
      <button className={styles.button} onClick={() => setParams('All')}>All</button>
      <button className={styles.button} onClick={() => setParams('MAIN')}>Main Course</button>
      <button className={styles.button} onClick={() => setParams('DESSERT')}>Dessert</button>
      <button className={styles.button} onClick={() => setParams('DRINK')}>Beverage</button>
      <button className={styles.button} onClick={() => setParams('SIDE')}>Salad</button>
      <button className={styles.button} onClick={() => setParams('SOUP')}>Soup</button>
      <button className={styles.button} onClick={() => setParams('SNACK')}>Snack</button>
      <button className={styles.button} onClick={() => setParams('BREAKFAST')}>Breakfast</button>
      <button className={styles.button} onClick={() => setParams('LUNCH')}>Lunch</button>
      </div>
      <div className={styles.grid}>
        
        {dish.map((data) => (
          <div key={data.id} className={styles.card}>
            <div>
              <h2 className={styles.cardTitle}>{data.name}</h2>
              <div className={styles.metaRow}>
                <span className={styles.price}> {data.price} {currncy}</span>
                <div className={styles.tags}>
                  <span className={styles.category}>{data.category}</span>
                  <span className={data.spicy ? styles.spicy : styles.mild}>
                    {data.spicy ? '🌶️ Spicy' : 'Mild'}
                  </span>
                </div>
              </div>
            </div>

            <button
              className={styles.button}
              onClick={() => router.push(`/menu/${data.id}`)}
            >
              Detail
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
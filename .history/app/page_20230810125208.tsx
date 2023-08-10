import Image from 'next/image'
import styles from './page.module.css'
import { use } from 'react'

export default function Home() {
  const [courses, setCourseData] = use
  return (
    <main className={styles.main}>
      <div className={styles.description}>
       
      </div>
    </main>
  )
}

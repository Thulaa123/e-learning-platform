import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'

export default function Home() {
  const [courses, setCourseData] = useState();
  async function fetchQuery() {
    const baseUrl = 'http://localhost:1337/api';
    
  }
  return (
    <main className={styles.main}>
      <div className={styles.description}>
       
      </div>
    </main>
  )
}

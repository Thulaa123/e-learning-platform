import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'
import { Button } from '@mui/material';

export default function Home() {
  const [courses, setCourseData] = useState();
  async function fetchQuery() {
    const baseUrl = 'http://localhost:1337/api';
    const response = await fetch(`${baseUrl}/courses/`);
    const data = await response.json();
    setCourseData(data)
    console.log(data);
    return data;
  }
  return (
    <main className={styles.main}>
      <div className={styles.description}>
       E Learning Platform
       <Button onClick={() => fetchQuery()}>Fetch</Button>
      </div>
    </main>
  )
}

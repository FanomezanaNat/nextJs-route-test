import React from 'react'
import styles from '@/app/page.module.css'; 


export default function Image() {
  return (
    <div className={styles.body}>
        <img src="https://picsum.photos/200/300" alt="image" />
    </div>
  )
}

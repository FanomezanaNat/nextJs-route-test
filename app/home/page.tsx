import React from 'react'
import styles from '@/app/page.module.css'
import Link from 'next/link';
import BlogList from '@/components/BlogList';

export default function Page() {
  return (
    <div className={styles.body}>
        <BlogList/>
    </div>
  )
}

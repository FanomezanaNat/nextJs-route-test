"use client"
import React from 'react';
import styles from '@/app/page.module.css'; 
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Blog() {
  const path=usePathname();
  return (
    <div className={styles.body}>
      <p>So about this blog i don't really know what talk about it. It's just a test about route in next </p>
      <Link href={`${path}/image`}> Click here  image</Link>
    </div>
  );
}
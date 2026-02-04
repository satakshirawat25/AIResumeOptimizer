
import React from 'react'
import styles from './History.module.css'
import Skeleton from '@mui/material/Skeleton'

const History = () => {
  return (
    <div className={styles.History}>
      <div className={styles.HistoryCardBlock}>

        <div className={styles.HistoryCard}>

          <Skeleton
          variant='rectangular'
          width={266}
          height={200}
          sx={{borderRadius:"20px"}}
          />

          
          <div className={styles.cardPercentage}>88%</div>
          <h2>Frontend Developer</h2>
          <p>Resume Name:Resume.pdf</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque molestias ipsum sint consequatur blanditiis quis quisquam iste natus praesentium placeat delectus quasi, soluta quidem hic, odit aliquid rerum quibusdam impedit.</p>
          <p>Dated:2026-01-22</p>
        </div>

        <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>88%</div>
          <h2>Frontend Developer</h2>
          <p>Resume Name:Resume.pdf</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque molestias ipsum sint consequatur blanditiis quis quisquam iste natus praesentium placeat delectus quasi, soluta quidem hic, odit aliquid rerum quibusdam impedit.</p>
          <p>Dated:2026-01-22</p>
        </div>

        <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>88%</div>
          <h2>Frontend Developer</h2>
          <p>Resume Name:Resume.pdf</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque molestias ipsum sint consequatur blanditiis quis quisquam iste natus praesentium placeat delectus quasi, soluta quidem hic, odit aliquid rerum quibusdam impedit.</p>
          <p>Dated:2026-01-22</p>
        </div>

        <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>88%</div>
          <h2>Frontend Developer</h2>
          <p>Resume Name:Resume.pdf</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque molestias ipsum sint consequatur blanditiis quis quisquam iste natus praesentium placeat delectus quasi, soluta quidem hic, odit aliquid rerum quibusdam impedit.</p>
          <p>Dated:2026-01-22</p>
        </div>

        <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>88%</div>
          <h2>Frontend Developer</h2>
          <p>Resume Name:Resume.pdf</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque molestias ipsum sint consequatur blanditiis quis quisquam iste natus praesentium placeat delectus quasi, soluta quidem hic, odit aliquid rerum quibusdam impedit.</p>
          <p>Dated:2026-01-22</p>
        </div>

      </div>
      
    </div>
  )
}

export default History




import React, { useContext, useEffect, useState } from 'react'
import styles from './History.module.css'
import Skeleton from '@mui/material/Skeleton'
import withAuthHOC from '../../utils/HOC/withAuthHOC'
import axios from '../../utils/axios.js'
import { AuthContext } from '../../utils/AuthContext'

const History = () => {
  const [data, setData] = useState([])
  const [loader, setLoader] = useState(false)

  const { userInfo } = useContext(AuthContext)

  useEffect(() => {
    const fetchUserData = async () => {
      setLoader(true)
      try {
        const results = await axios.get(`/api/resume/get/${userInfo?._id}`)
        console.log(results.data.resumes)
        // console.log(results.data);
        setData(results.data.resumes)
      } catch (err) {
        console.log(err)
        alert("Something went wrong")
      } finally {
        setLoader(false)
      }
    }
    fetchUserData()
  }, [])

  return (
    <div className={styles.History}>
      <div className={styles.HistoryCardBlock}>

      

          {loader && 
            <Skeleton
              variant="rectangular"
              width={266}
              height={200}
              sx={{ borderRadius: "20px" }}
            />
          }

          {data.map((item,index) => {
            return(
            <div key={item._id} className={styles.HistoryCard}>
              <div className={styles.cardPercentage}>
                {item.score}%
              </div>

              {/* <h2>{item.jobRole || "Frontend Developer"}</h2> */}
              <p>Resume Name: {item.resumeName}</p>
              <p>{item.feedback}</p>
              <p>Dated: {item.createdAt?.slice(0, 10)}</p>
            </div>
            )
            })}


      </div>
    </div>   
  )
}

export default withAuthHOC(History)





import React from 'react'
import styles from './Admin.module.css'
import Skeleton from '@mui/material/Skeleton'
import withAuthHOC from '../../utils/HOC/withAuthHOC'

const Admin = () => {
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)
  return (
    <div className={styles.Admin}>
      <div className={styles.AdminBlock}>

        <Skeleton
          variant='rectangular'
          width={266}
          height={200}
          sx={{borderRadius:"20px"}}
          />

        <div className={styles.AdminCard}>
          <h2>AdminPage</h2>
          <p style={{color:"blue"}}>adm@gmail.com</p>
          <h3>Score:50%</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum in voluptas ad dolores doloremque. Voluptatum eos asperiores quo, praesentium temporibus dolore laudantium,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt eaque repudiandae fugiat quos sed distinctio incidunt consequatur placeat, dignissimos accusamus totam aliquam vero alias dolorem, eveniet quia dolore odit voluptatum. maxime omnis voluptates, doloremque velit labore ullam amet!</p>
        </div>

        <div className={styles.AdminCard}>
          <h2>AdminPage</h2>
          <p style={{color:"blue"}}>adm@gmail.com</p>
          <h3>Score:50%</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum in voluptas ad dolores doloremque. Voluptatum eos asperiores quo, praesentium temporibus dolore laudantium, maxime omnis voluptates, doloremque velit labore ullam amet!</p>
        </div>

        <div className={styles.AdminCard}>
          <h2>AdminPage</h2>
          <p style={{color:"blue"}}>adm@gmail.com</p>
          <h3>Score:50%</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum in voluptas ad dolores doloremque. Voluptatum eos asperiores quo, praesentium temporibus dolore laudantium, maxime omnis voluptates, doloremque velit labore ullam amet!</p>
        </div>

        <div className={styles.AdminCard}>
          <h2>AdminPage</h2>
          <p style={{color:"blue"}}>adm@gmail.com</p>
          <h3>Score:50%</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum </p>
        </div>

        <div className={styles.AdminCard}>
          <h2>AdminPage</h2>
          <p style={{color:"blue"}}>adm@gmail.com</p>
          <h3>Score:50%</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum in voluptas ad dolores doloremque. Voluptatum eos asperiores quo, praesentium temporibus dolore laudantium, maxime omnis voluptates, doloremque velit labore ullam amet!</p>
        </div>

        


      </div>
      
    </div>
  )
}

export default withAuthHOC(Admin)

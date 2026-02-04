import React from 'react'
import styles from './Sidebar.module.css'
import ArticleIcon from '@mui/icons-material/Article'
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';

import DashboardIcon from '@mui/icons-material/Dashboard'
const Sidebar = () => {
  return (
    <div className={styles.sideBar}>
        <div className={styles.sideBarIcon}>
        <ArticleIcon sx={{fontSize:54 ,marginBottom:2}}/>
        <div className={styles.sideBarTopContent}>Resume Screening</div>
        
        </div>
        <div className={styles.sideBarOptionsBlock}>

            <div className={styles.sideBarOption}>
                <DashboardIcon sx={{fontSize:22}}/>
                <div>Dashboard</div>
            </div>

              
              <div className={styles.sideBarOption}>
                <ManageSearchIcon sx={{fontSize:22}}/>
                <div>History</div>
            </div>

              <div className={styles.sideBarOption}>
                <AdminPanelSettingsIcon sx={{fontSize:22}}/>
                <div>Admin</div>
            </div>

              <div className={styles.sideBarOption}>
                <LogoutIcon sx={{fontSize:22}}/>
                <div>Logout</div>
            </div>

            

        </div>
    </div>
  )
}

export default Sidebar


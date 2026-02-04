import React from 'react'
import styles from './Dashboard.module.css'

const Dashboard = () => {
  return (
    <div className={styles.Dashboard}>
        <div className={styles.DashboardLeft}>
        <div className={styles.DashboardHeader}>
            <div className={styles.DashboardHeaderTitle}>Smart Resume Screening</div>
            <div className={styles.DashboardHeaderLargeTitle}> Resume Match Score</div>


        </div>
        <div className={styles.alertInfo}>
            <div> Important Instruction: </div>
             <div className={styles.dashboardInstruction}>
                <div>Please paste the complete job description in the "Job Description" filed before submitting.</div>
                <div>Only PDF format (.pdf) resumes are accepted</div>
        </div>
        </div>

       <div className={styles.DashboardUploadResume}>
        <div className={styles.DashboardResumeBlock}>
          Upload Your Resume
        </div>


        <div className={styles.DashboardInputField}>
          <label htmlFor='inputField' className={styles.analyzeAIBtn}>Upload Resume</label>
          <input type='file' accept='.pdf' id='inputField'/>
        </div>
       </div>

       <div className={styles.jobDesc}>
        <textarea className={styles.textArea} placeholder='Paste your Job Description' rows={10} cols={50}/>
       </div>
        </div>
     
    </div>
  )
}

export default Dashboard

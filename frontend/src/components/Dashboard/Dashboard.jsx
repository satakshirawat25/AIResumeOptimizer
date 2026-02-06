import React,{useState} from "react";
import styles from "./Dashboard.module.css";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import Skeleton from "@mui/material/Skeleton";
import withAuthHOC from "../../utils/HOC/withAuthHOC";
import axios from '../../utils/axios'
import {useContext} from "react";
import {AuthContext} from '../../utils/AuthContext'

const Dashboard = () => {
  const [uploadFiletext,setUploadFileText] = useState("upload your resume")
  const [loading,setLoading] = useState(false)
  const [resumeFile,setResumeFile] = useState(null)
  const [jobDesc,setJobDesc] = useState("")
  const [result,setResult] = useState(null)

  const {userInfo} = useContext(AuthContext)

  const handleOnChangeFile =(e)=>{
    console.log(e.target.files[0])
    setUploadFileText(e.target.files[0].name)
  }
 
  const handleUpload = async()=>{
    setResult(null)
    if(!jobDesc || !resumeFile){
      alert("Please fill Job Description & upload Resume")
      return
    }

    const formData = new.FormData()
    formData.append("resume",resumeFile)
    formData.append("job_desc",jobDesc)
    formData.append("user",userInfo._id)
  }
  return (
    <div className={styles.Dashboard}>
      <div className={styles.DashboardLeft}>
        <div className={styles.DashboardHeader}>
          <div className={styles.DashboardHeaderTitle}>
            Smart Resume Screening
          </div>
          <div className={styles.DashboardHeaderLargeTitle}>
            {" "}
            Resume Match Score
          </div>
        </div>
        <div className={styles.alertInfo}>
          <div> Important Instruction: </div>
          <div className={styles.dashboardInstruction}>
            <div>
              Please paste the complete job description in the "Job Description"
              filed before submitting.
            </div>
            <div>Only PDF format (.pdf) resumes are accepted</div>
          </div>
        </div>

        <div className={styles.DashboardUploadResume}>
          <div className={styles.DashboardResumeBlock}>Upload Your Resume</div>

          <div className={styles.DashboardInputField}>
            <label htmlFor="inputField" className={styles.analyzeAIBtn}>
           
              {uploadFiletext}</label>
            <input type="file" accept=".pdf" id="inputField" onChange={handleOnChangeFile}/>
          </div>
        </div>

        <div className={styles.jobDesc}>
          <textarea value={jobDesc} onChnage={(e)=>{setJobDesc(e.target.value)}}
            className={styles.textArea}
            placeholder="Paste your Job Description"
            rows={10}
            cols={50}
          />

          <div className={styles.AnalyzeBtn}>Analyze</div>
        </div>
      </div>

      <div className={styles.DashboardRight}>
        <div className={styles.DashboardRightTopCard}>
          <div>Analyze with AI</div>

          <img
            className={styles.profileImg}
            src={
              "https://photosly.in/wp-content/uploads/2024/04/cute-dp-for-girls_3.jpg"
            }
          />
          <h2>ProfilePicture</h2>
        </div>

        {/* <div className={styles.DashboardRightTopCard}>
        <div>Result</div>

       <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:20}}>
      <h1>75%</h1>
      <CreditScoreIcon sx={{fontSize:22}}/>
       </div>
       
       <div className={styles.feedback}>
        <h3>Feedback</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias natus nesciunt earum officiis quam dolorum aliquid, veniam a cupiditate sed vel reprehenderit eum nulla ea necessitatibus. Recusandae tempore adipisci quae!</p>
       </div>
      </div> */}

        <Skeleton
          variant="rectangular"
          sx={{ borderRadius: "20px" }}
          width={370}
          height={300}
        />
      </div>
    </div>
  );
};

export default withAuthHOC(Dashboard);

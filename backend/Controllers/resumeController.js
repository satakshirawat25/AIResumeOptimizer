
const ResumeModel = require("../models/resume");
const fs = require("fs");
const pdfParse = require("pdf-parse");
const { CohereClient } = require("cohere-ai");

// ⚠️ Later move token to .env
const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

exports.addResume = async (req, res) => {
  try {
    // console.log("addResume called!");
    // console.log("req.body:", req.body);
    // console.log("req.file:", req.file);

    const { job_desc, user } = req.body;

    if (!job_desc || !user) {
      return res.status(400).json({
        message: "job_desc or user missing",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        message: "Resume file missing",
      });
    }

    // ✅ Read PDF from disk (multer diskStorage)
    const pdfBuffer = fs.readFileSync(req.file.path);

    // ✅ Parse PDF
    const pdfData = await pdfParse(pdfBuffer);

    // if (!pdfData.text || pdfData.text.trim() === "") {
    //   return res.status(400).json({
    //     message: "No readable text found (scanned PDF)",
    //   });
    // }

    // ✅ AI Prompt
    const prompt = `
You are a resume screening assistant.
            Compare the following resume text with the provided Job Description (JD) and give a match score (0-100) and feedback.

            Resume:
            ${pdfData.text}

            Job Description:
            ${job_desc}

              Return the score and a brief explanation in this format:
            Score: XX
            Reason: ...


              `;

    // ✅ Cohere API call
    const response = await cohere.chat({
      model: "command-a-03-2025",
      message: prompt,
      maxTokens: 300,
      temperature: 0.7,
    });

    const result = response.text;
    // console.log("AI RESULT 👇");
    console.log(result);

    // // // ✅ Final Response
    // res.status(200).json({
    //   success: true,
    //   scoreReason: result,
    // });

    const match = result.match(/Score:\s*(\d+)/);
    const score = match ? parseInt(match[1], 10) : null;
    const reasonMatch = result.match(/Reason:\s*([\s\S]+)/);
    const reason = reasonMatch ? reasonMatch[1].trim() : null;

    //  ✅ Save to DB
    const newResume = await ResumeModel({
      user,
      job_desc,
      // resume_name: pdfData.text,
      resume_name:req.file.originalname,
      score,
      feedback:reason
    });

    await newResume.save()

    fs.unlinkSync(req.file.path)

    res.status(200).json({message:"Your analysis are ready",data:newResume})

    
  } catch (err) {
    console.error("ERROR:", err);
    res.status(500).json({
      message: "Error processing resume",
      error: err.message,
    });
  }
};

exports.getAllResumesForUser = async(req,res)=>{
  try{
    const {user} = req.params
    let resumes = await ResumeModel.find({user:user}).sort({createdAt:-1})
    return res.status(200).json({message:"Your Previous History",resumes:resumes})
  }catch(error){
    console.log(error)
    return res.status(500).json({error:"Server error",message:err.message})
  }
}


exports.getResumeForAdmin=async(req,res)=>{
  try{
   
    let resumes = await ResumeModel.find({}).sort({createdAt:-1})
    return res.status(200).json({message:"Fetched All History",resumes:resumes})
  }catch(error){
    console.log(error)
    return res.status(500).json({error:"Server error",message:err.message})
  }
}
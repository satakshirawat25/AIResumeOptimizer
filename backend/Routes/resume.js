import express from 'express'
const router = express.Router()

import ResumeController from '../Controllers/resumeController.js'

router.post('/addResume',ResumeController.addResume)

export default router
import express from "express"
import * as VideoController from "../controllers/video.controller.js"

const router = express.Router()

router.post("/videos", VideoController.createVideo)
router.get("/videos", VideoController.getAllVideos)

export default router

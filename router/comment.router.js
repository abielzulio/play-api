import express from "express"
import * as CommentController from "../controllers/comment.controller.js"

const router = express.Router()

router.post("/comments/:videoId", CommentController.createComment)
router.get("/comments/:videoId", CommentController.getAllComments)

export default router

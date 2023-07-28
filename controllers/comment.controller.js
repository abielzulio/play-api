import { CommentService } from "../service/comment.service.js"

export const createComment = async (req, res) => {
  try {
    const { userName, comment } = req.body
    const commentService = new CommentService()
    if (!userName || !comment) {
      return res.status(400).json({
        meta: { status: 400, message: "Missing required body" },
      })
    }
    if (!req.params.videoId) {
      return res.status(400).json({
        meta: { status: 400, message: "Missing required param" },
      })
    }
    const newComment = await commentService.createComment(
      req.body,
      req.params.videoId
    )
    res.status(201).json({ meta: { status: 201 }, data: newComment })
  } catch (error) {
    res.status(500).json({ meta: { status: 500, message: error.message } })
  }
}

export const getAllComments = async (req, res) => {
  try {
    const commentService = new CommentService()
    const comments = await commentService.getAllComments(req.params.videoId)
    res.status(200).json({ meta: { status: 200 }, data: comments })
  } catch (error) {
    res.status(500).json({ meta: { status: 500, message: error.message } })
  }
}

import { CommentService } from "../service/comment.service"

const createComment = async (req, res) => {
  try {
    const commentService = new CommentService()
    const comment = await commentService.createComment(
      req.body,
      req.params.videoId
    )
    res.status(201).json({ meta: { status: 201 }, data: comment })
  } catch (error) {
    res.status(500).json({ meta: { status: 500, message: error.message } })
  }
}

const getAllComments = async (req, res) => {
  try {
    const commentService = new CommentService()
    const comments = await commentService.getAllComments(req.params.videoId)
    res.status(200).json({ meta: { status: 200 }, data: comments })
  } catch (error) {
    res.status(500).json({ meta: { status: 500, message: error.message } })
  }
}

export default { createComment, getAllComments }

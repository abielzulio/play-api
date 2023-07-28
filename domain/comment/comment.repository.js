import Comment from "./comment.entity"

export class CommentRepository {
  async createComment(payload) {
    try {
      const newComment = new Comment({
        videoId: payload.videoId,
        comment: payload.comment,
        username: payload.username,
        createdAt: Date.now(),
      })

      return await newComment.save()
    } catch (error) {
      throw error
    }
  }

  async getAllComments(videoId) {
    try {
      const comments = Comment.find(
        { videoId },
        "comment username createdAt"
      ).lean()
      return comments
    } catch (error) {
      throw error
    }
  }
}

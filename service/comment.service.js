import { CommentRepository } from "../domain/comment/comment.repository.js"

export class CommentService {
  constructor() {
    this.commentRepository = new CommentRepository()
  }

  async createComment(comment, videoId) {
    try {
      return await this.commentRepository.createComment({
        videoId: videoId,
        comment: comment.comment,
        username: comment.username,
      })
    } catch (error) {
      throw error
    }
  }

  async getAllComments(videoId) {
    try {
      return await this.commentRepository.getAllComments(videoId)
    } catch (error) {
      throw error
    }
  }
}

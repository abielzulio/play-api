import { nanoid } from "nanoid"
import { VideoRepository } from "../domain/video/video.repository.js"

export class VideoService {
  constructor() {
    this.videoRepository = new VideoRepository()
  }

  async createVideo(video) {
    try {
      return await this.videoRepository.createVideo({
        id: nanoid(),
        thumbnail: video.thumbnail,
        title: video.title,
      })
    } catch (error) {
      throw error
    }
  }

  async getAllVideos() {
    try {
      return await this.videoRepository.getAllVideos()
    } catch (error) {
      throw error
    }
  }
}

import Video from "./video.entity.js"
import { nanoid } from "nanoid"

export class VideoRepository {
  async createVideo(payload) {
    try {
      const newVideo = new Video({
        id: nanoid(),
        thumbnail: payload.thumbnail,
        title: payload.title,
        url: payload.url,
        createdAt: Date.now(),
      })

      return newVideo.save()
    } catch (error) {
      throw error
    }
  }

  async getAllVideos() {
    try {
      const videos = Video.find({}, "id thumbnail title url createdAt").lean()
      return videos
    } catch (error) {
      throw error
    }
  }
}

import Video from "./video.entity"
import nanoid from "nanoid"

export class VideoRepository {
  async createVideo(payload) {
    try {
      const newVideo = new Video({
        id: nanoid(),
        thumbnail: payload.thumbnail,
        title: payload.title,
      })

      return newVideo.save()
    } catch (error) {
      throw error
    }
  }

  async getAllVideos() {
    try {
      const videos = video.find({}, "id thumbnail").lean()
      return videos
    } catch (error) {
      throw error
    }
  }
}

import { VideoService } from "../service/video.service.js"

export const createVideo = async (req, res) => {
  try {
    const { thumbnail, title, url } = req.body
    if (!thumbnail || !title || !url) {
      return res.status(400).json({
        meta: {
          status: 400,
          message: `Missing required body`,
        },
      })
    }

    const videoService = new VideoService()
    const video = await videoService.createVideo(req.body)
    res.status(201).json({ meta: { status: 201 }, data: video })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getAllVideos = async (req, res) => {
  try {
    const videoService = new VideoService()
    const videos = await videoService.getAllVideos()
    res.status(200).json({ meta: { status: 200 }, data: videos })
  } catch (error) {
    res.status(500).json({ meta: { status: 500, message: error.message } })
  }
}

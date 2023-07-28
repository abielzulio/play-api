import { Schema, model } from "mongoose"

const VideoSchema = new Schema({
  id: String,
  title: String,
  thumbnail: String,
  url: String,
  createdAt: Date,
})

export default model("Video", VideoSchema)

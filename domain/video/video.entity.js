import { Schema, model } from "mongoose"

const VideoSchema = new Schema({
  id: String,
  title: String,
  thumbnail: String,
})

export default model("Video", VideoSchema)

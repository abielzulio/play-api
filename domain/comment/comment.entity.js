import { Schema, model } from "mongoose"

const CommentSchema = new Schema({
  videoId: String,
  userName: String,
  comment: String,
  createdAt: Date,
})

export default model("Comment", CommentSchema)

import { Schema, model } from "mongoose"

const ProductSchema = new Schema({
  id: String,
  title: String,
  price: Number,
  videoId: String,
  link: String,
  createdAt: Date,
})

export default model("Product", ProductSchema)

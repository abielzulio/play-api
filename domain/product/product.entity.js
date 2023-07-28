import { Schema, model } from "mongoose"

const ProductSchema = new Schema({
  id: String,
  title: String,
  price: String,
  videoId: String,
  link: String,
})

export default model("Product", ProductSchema)

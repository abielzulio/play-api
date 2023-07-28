import { Schema, model } from "mongoose"

const UserSchema = new Schema({
  id: String,
  fullName: String,
  userName: String,
  email: String,
  password: String,
})

export default model("User", UserSchema)

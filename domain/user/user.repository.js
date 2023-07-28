import User from "./user.entity.js"
import { nanoid } from "nanoid"

export class UserRepository {
  async createUser(payload) {
    try {
      const newUser = new User({
        id: nanoid(),
        fullName: payload.fullName,
        email: payload.email,
        password: payload.password,
      })

      return await newUser.save()
    } catch (error) {
      throw error
    }
  }
}

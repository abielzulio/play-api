import User from "./user.entity"
import { nanoid } from "nanoid"

export class UserRepository {
  async createUser(payload) {
    try {
      const newUser = new User({
        id: nanoid(),
        fullname: payload.fullname,
        email: payload.email,
        password: payload.password,
      })

      return await newUser.save()
    } catch (error) {
      throw error
    }
  }
}

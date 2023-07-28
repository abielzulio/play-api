import { UserRepository } from "../domain/user/user.repository.js"

export class UserService {
  constructor() {
    this.userRepository = new UserRepository()
  }

  async createUser(user) {
    try {
      return await this.userRepository.createUser(user)
    } catch (error) {
      throw error
    }
  }
}

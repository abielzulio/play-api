import { UserService } from "../service/user.service.js"

export const createUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body
    const userService = new UserService()
    const user = await userService.createUser({ fullName, email, password })
    res.status(201).json({ meta: { status: 201 }, data: user })
  } catch (error) {
    res.status(500).json({ meta: { status: 500, message: error.message } })
  }
}

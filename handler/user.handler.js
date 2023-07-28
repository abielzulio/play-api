import { UserService } from "../service/user.service"

const createUser = async (req, res) => {
  try {
    const userService = new UserService()
    const user = await userService.createUser(req.body)
    res.status(201).json({ meta: { status: 201 }, data: user })
  } catch (error) {
    res.status(500).json({ meta: { status: 500, message: error.message } })
  }
}

export default { createUser }

import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import mongoose from "mongoose"
import userRouter from "./router/user.route.js"
import commentRouter from "./router/comment.router.js"
import productRouter from "./router/product.router.js"
import videoRouter from "./router/video.router.js"

const app = express()

dotenv.config()

mongoose.connect(process.env.MONGODB_URL)

app.use(bodyParser.json())

app.use("/v1", userRouter)
app.use("/v1", commentRouter)
app.use("/v1", productRouter)
app.use("/v1", videoRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`)
})

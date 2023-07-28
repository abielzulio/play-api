import express from "express"
import * as ProductController from "../controllers/product.controller.js"

const router = express.Router()

router.post("/products/:videoId", ProductController.createProduct)
router.get("/products/:videoId", ProductController.getAllProducts)

export default router

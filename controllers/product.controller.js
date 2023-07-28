import { ProductService } from "../service/product.service.js"

export const createProduct = async (req, res) => {
  try {
    const { link, title, price } = req.body
    if (!link || !title || !price) {
      return res.status(400).json({
        meta: { status: 400, message: "Missing required body" },
      })
    }
    if (!req.params.videoId) {
      return res.status(400).json({
        meta: { status: 400, message: "Missing required param" },
      })
    }
    const productService = new ProductService()
    const product = await productService.createProduct(
      req.body,
      req.params.videoId
    )
    res.status(201).json({ meta: { status: 201 }, data: product })
  } catch (error) {
    res.status(500).json({ meta: { status: 500, message: error.message } })
  }
}

export const getAllProducts = async (req, res) => {
  try {
    const productService = new ProductService()
    const products = await productService.getAllProducts(req.params.videoId)
    res.status(200).json({ meta: { status: 200 }, data: products })
  } catch (error) {
    res.status(500).json({ meta: { status: 500, message: error.message } })
  }
}

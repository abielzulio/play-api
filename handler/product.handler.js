import { ProductService } from "../service/product.service"

const createProduct = async (req, res) => {
  try {
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

const getAllProducts = async (req, res) => {
  try {
    const productService = new ProductService()
    const products = await productService.getAllProducts(req.params.videoId)
    res.status(200).json({ meta: { status: 200 }, data: products })
  } catch (error) {
    res.status(500).json({ meta: { status: 500, message: error.message } })
  }
}

export default { createProduct, getAllProducts }

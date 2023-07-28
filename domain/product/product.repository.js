import { nanoid } from "nanoid"
import Product from "./product.entity.js"

export class ProductRepository {
  async createProduct(payload) {
    try {
      const newProduct = new Product({
        id: nanoid(),
        link: payload.link,
        title: payload.title,
        price: payload.price,
        videoId: payload.videoId,
      })

      return await newProduct.save()
    } catch (error) {
      throw error
    }
  }

  async getAllProducts(videoId) {
    try {
      const products = Product.find({ videoId }, "id link title price").lean()
      return products
    } catch (error) {
      throw error
    }
  }
}

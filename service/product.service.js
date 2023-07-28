const { ProductRepository } = require("../domain/product/product.repository")

export class ProductService {
  constructor() {
    this.productRepository = new ProductRepository()
  }

  async createProduct(product, videoId) {
    try {
      return await this.productRepository.createProduct({
        link: product.link,
        title: product.title,
        price: product.price,
        videoId: videoId,
      })
    } catch (error) {
      throw error
    }
  }

  async getAllProducts(videoId) {
    try {
      return await this.productRepository.getAllProducts(videoId)
    } catch (error) {
      throw error
    }
  }
}

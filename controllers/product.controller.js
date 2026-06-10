const ProductModel = require("../models/product.model");
const View = require("../Views");

class ProductController {
  static async readProducts() {
    try {
      const products = await ProductModel.findAll();
      View.showData(products);
    } catch (error) {
      View.showError(error);
    }
  }

  static async readProductById(id) {
    try {
      const products = await ProductModel.findById(id);
      View.showData(products);
    } catch (error) {
      View.showError(error);
    }
  }

  static async createProduct(data) {
    try {
      const result = await ProductModel.create(data);
      View.showData(result);
    } catch (error) {
      View.showError(error);
    }
  }

  static async deleteProduct(id) {
    try {
      const result = await ProductModel.remove(id);
      View.showData(result);
    } catch (error) {
      View.showError(error);
    }
  }
}

module.exports = ProductController;

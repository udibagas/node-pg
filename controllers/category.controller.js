const CategoryModel = require("../models/category.model");
const View = require("../Views");

class CategoryController {
  static async readCategories() {
    try {
      const categories = await CategoryModel.findAll();
      View.showData(categories);
    } catch (error) {
      View.showError(error);
    }
  }

  static async readCategoryById(id) {
    try {
      const categories = await CategoryModel.findById(id);
      View.showData(categories);
    } catch (error) {
      View.showError(error);
    }
  }

  static async createCategory({ name }) {
    try {
      const result = await CategoryModel.create({ name });
      View.showData(result);
    } catch (error) {
      View.showError(error);
    }
  }

  static async deleteCategory(id) {
    try {
      const categories = await CategoryModel.remove(id);
      View.showData(categories);
    } catch (error) {
      View.showError(error);
    }
  }

  static async updateCategory(id, { name }) {
    try {
      const categories = await CategoryModel.update(id, { name });
      View.showData(categories);
    } catch (error) {
      View.showError(error);
    }
  }
}

module.exports = CategoryController;

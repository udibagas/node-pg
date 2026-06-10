const Model = require("../models");
const CategoryModel = require("../models/category.model");
const View = require("../Views");

class Controller {
  static async testConnection() {
    try {
      const result = await Model.testConnection();
      View.showData(result);
    } catch (error) {
      View.showError(error);
    }
  }
}

module.exports = Controller;

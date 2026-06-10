const Model = require(".");
const pool = require("../db/pool");

class CategoryModel extends Model {
  static tableName = "categories";
}

module.exports = CategoryModel;

const Model = require(".");
const pool = require("../db/pool");

class CategoryModel extends Model {
  id;
  name;

  tableName = "categories";

  constructor(id, name) {
    super();
    this.id = id;
    this.name = name;
  }

  static tableName = "categories";

  static createInstance({ id, name }) {
    // data = {id: 1, name: 'Category A' }
    // data = CategoryModel {id: 1, name: 'Category A' }
    return new CategoryModel(id, name);
  }
}

module.exports = CategoryModel;

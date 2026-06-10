const Model = require(".");
const pool = require("../db/pool");

class ProductModel extends Model {
  static tableName = "products";

  static async buyProduct(id, qty) {
    // update product dengan mengurangi stock (stock = stock - qty)
    // update products set stock = stock - {qty} where id = {id} returning *
  }
}

module.exports = ProductModel;

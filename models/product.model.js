const Model = require(".");
const pool = require("../db/pool");

class ProductModel extends Model {
  static tableName = "products";
  tableName = "products";

  id;
  name;
  description;
  price;
  stock;
  categoryId;

  constructor({ id, name, description, price, stock, categoryId }) {
    super();
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.stock = stock;
    this.categoryId = categoryId;
  }

  static async buyProduct(id, qty) {
    // update product dengan mengurangi stock (stock = stock - qty)
    // update products set stock = stock - {qty} where id = {id} returning *
  }

  static createInstance(data) {
    return new ProductModel(data);
  }
}

module.exports = ProductModel;

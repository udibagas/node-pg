const pool = require("../db/pool");

class Model {
  static tableName;
  tableName;

  constructor() {}

  static async testConnection() {
    const query = "SELECT NOW()";
    const result = await pool.query(query);
    return result.rows;
  }

  static async findAll() {
    const query = `SELECT * FROM "${this.tableName}" ORDER BY id ASC`;
    const result = await pool.query(query);
    return result.rows.map((r) => {
      return this.createInstance(r);
    });
  }

  static async findById(id) {
    const query = `SELECT * FROM "${this.tableName}" WHERE id = ${id}`;
    const result = await pool.query(query);

    if (result.rowCount == 0) {
      throw new Error(`Data not found`);
    }

    const data = result.rows[0];
    const instance = this.createInstance(data);
    return instance;
  }

  static async create(data) {
    // data = { name: '...'}
    // data = { name: '...', price: '...', stock: 1, categoryId: 1 }
    // tergantung table

    // [name, price, stock]
    // ubah ke => name, price, stock
    const columns = Object.keys(data)
      .map((c) => `"${c}"`)
      .join(", ");

    const values = Object.keys(data)
      .map((c, i) => "$" + (i + 1))
      .join(", ");

    // parameterized query
    const query = `
      INSERT INTO "${this.tableName}"
        (${columns})
      VALUES
        (${values})
      RETURNING *`;

    const result = await pool.query(query, Object.values(data));
    return result.rows;
  }

  static async remove(id) {
    const existingData = await this.findById(id);
    return existingData.remove();
    // const query = `DELETE FROM "${this.tableName}" WHERE id = $1 RETURNING *`;
    // const result = await pool.query(query, [id]); // secara query berhasil
    // return result.rows;
  }

  static async update(id, data) {
    const existingData = await this.findById(id);

    // data = { name: '...'}
    // data = { name: '...', price: '...', stock: 1, categoryId: 1 }
    // tergantung table

    // [name, price, stock]
    // ubah ke => name, price, stock
    const updatedData = Object.keys(data)
      .map((k, i) => {
        return `"${k}" = $` + (i + 1);
      })
      .join(", ");

    // parameterized query
    const query = `
      UPDATE "${this.tableName}"
      SET ${updatedData}
      WHERE id = ${id}
      RETURNING *`;

    const result = await pool.query(query, Object.values(data));
    return result.rows;
  }

  static createInstance(data) {}

  // instance method
  async remove() {
    const query = `DELETE FROM "${this.tableName}" WHERE id = $1 RETURNING *`;
    const result = await pool.query(query, [this.id]); // secara query berhasil
    return this;
  }
}

module.exports = Model;

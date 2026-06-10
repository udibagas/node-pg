const Controller = require("./controllers");
const CategoryController = require("./controllers/category.controller");
const ProductController = require("./controllers/product.controller");
const command = process.argv[2];

async function main() {
  switch (command) {
    case "categories":
      CategoryController.readCategories();
      break;

    case "products":
      ProductController.readProducts();
      break;

    case "product":
      {
        const id = process.argv[3];
        ProductController.readProductById(id);
      }
      break;

    case "category":
      {
        const id = process.argv[3];
        CategoryController.readCategoryById(id);
      }
      break;

    case "category:update":
      {
        const [id, name] = process.argv.slice(3);
        CategoryController.updateCategory(id, { name });
      }
      break;

    case "test":
      Controller.testConnection();
      break;

    case "new-category":
      const name = process.argv[3];
      CategoryController.createCategory({ name });
      break;

    case "new-product":
      {
        const [name, price, stock, categoryId] = process.argv.slice(3);
        ProductController.createProduct({ name, price, stock, categoryId });
      }

      break;

    case "buy":
      break;

    case "product:delete":
      {
        const id = process.argv[3];
        ProductController.deleteProduct(id);
      }
      break;

    case "category:delete":
      {
        const id = process.argv[3];
        CategoryController.deleteCategory(id);
      }
      break;

    default:
      break;
  }
}

main();

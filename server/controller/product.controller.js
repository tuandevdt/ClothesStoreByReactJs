const { resErrors, resData } = require("./common/common");
const {getAllProduct, 
  createProduct, 
  getProductById, updateProduct, getProductByCategoryId, deleteProduct, getTop10Products} = require("../service/productService");

class ApiProductController {
  static async index(req, res) {
    try {
      let products = await getAllProduct();
      let message = "Get data successfully";
      resData(res, 200, message, products);
    } catch (error) {
      resErrors(res, 500, error.message);
    }
  }
  static async findById(req, res) {
    try {
      const {id} = req.params;
      const product = await getProductById(id)
      let message = "Get data successfully";
      res.json({status: 200, message, product});
    } catch (error) {
      resErrors(res, 500, error.message);
    }
    
  }
  static async productByCategoryId(req, res) {
    try {
      const categoryId = req.params.id;
      const products = await getProductByCategoryId(categoryId)
      let message = "Get data successfully";
      res.json({status: 200, message, products});
    } catch (error) {
      resErrors(res, 500, error.message);
    }
  }
  static async create(req, res) {
    try {
      const data = req.body;
      const product = await createProduct(data)
      let message = "Create product successfully";
      resData(res, 200, message, product);
    } catch (error) {
      resErrors(res, 500, error.message);
    }
  }
  static async update(req, res) {
    try {
      const {id} = req.params;
      const data = req.body;
      console.log(id);      

      let product = await updateProduct(id, data)
      
      resData(res, 200, message, product);
    } catch (error) {
      resErrors(res, 500, error.message);
    }
  }
  static async delete(req, res) {
    try {
      const {id} = req.params;      
      const remove = await deleteProduct(id)      
      res.json(remove);
    } catch (error) {
      resErrors(res, 500, error.message);
    }
  }
  static async getTop10(req, res) {
    try {
      const products = await getTop10Products()
      res.json({products})
    } catch (error) {
      resErrors(res, 500, error.message);
    }
  }
}
module.exports = ApiProductController;

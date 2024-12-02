const { resErrors, resData } = require("./common/common");
const {getAllCategories, createCategory, updateCategory, deleteCategory} = require("../service/categoryService");

class ApiCategoryController {
  static async index(req, res) {
    try {
      let categories = await getAllCategories();
      let message = "Get data successfully";
      resData(res, 200, message, categories);
    } catch (error) {
      resErrors(res, 500, error.message);
    }
  }
  static async create(req, res) {
    try {
      const {name, image, description} = req.body;
      
      const data = await createCategory({name, image, description});
      let message = "Create category successfully";
      resData(res, 200, message, data);
    } catch (error) {
      resErrors(res, 500, error.message);
    }
  }
  static async update(req, res) {
    try {
      const {id} = req.params;
      const {name, image, description} = req.body;
      const data = {name, image, description};
      const result = await updateCategory(data, id)
      let message = "Update category successfully";
      resData(res, 200, message, result);
    } catch (error) {
      resErrors(res, 500, error.message);
    }
  }

  static async delete(req, res) {
    try {
      const {id} = req.params;
      await deleteCategory(id);
      resData(res, 200, message);
    } catch (error) {
      resErrors(res, 500, error.message);
    }
  }
}
module.exports = ApiCategoryController;

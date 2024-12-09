const { createCart, getAllCarts, getCart, updateCart, deleteCart, deleteAllCart } = require("../service/cartService");
const { resErrors, resData } = require("./common/common");


class ApiCartController {
  static async index(req, res) {
    try {
      const userId = req.params.id;
      let carts = await getAllCarts(userId)
      let message = "Get cart data successfully";
      resData(res, 200, message, carts);    
    } catch (error) {
      resErrors(res, 500, error.message);
    }
  }

  static async findById(req, res) {
    try {
      const { productId, colorId, sizeId, userId } = req.query;
  
      const cart = await getCart(productId, colorId, sizeId, userId);
      res.json(cart)
    } catch (error) {
      resErrors(res, 500, error.message);
    }
  }
  
  static async create(req, res) {
    try {
      const data = req.body;
      let cart = await createCart(data)
      res.json(cart)
    } catch (error) {
      resErrors(res, 500, error.message);
    }
  }
  
  static async delete(req, res) {
    try {
      const {id} = req.params;
      const deleteA = await deleteCart(id)
      let message = "Update cart data successfully";
      resData(res, 200, message, deleteA);
    } catch (error) {
      resErrors(res, 500, error.message);
    }
    
  }

  static async deleteAll(req, res) {
    try {
      const {userId} = req.params;
      const deleteAll = await deleteAllCart(userId)
      res.json(deleteAll)
    } catch (error) {
      resErrors(res, 500, error.message);
    }
  }

  static async update(req, res) {
    const {id} = req.params;
    const data = req.body;    
    try {
      const quantity = data.quantity;
      const update = await updateCart(id,quantity);
      console.log(update);
      
      let message = "Update cart data successfully";
      resData(res, 200, message, update);
    } catch (error) {
      resErrors(res, 500, error.message);
    }
  }
}
module.exports = ApiCartController;

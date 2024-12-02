const { where } = require("sequelize");
const { resErrors, resData } = require("./common/common");
const db = require("../models/index");
const { createOrder } = require("../service/orderService");
const { getAllCarts } = require("../service/cartService");


class ApiOrderController {
  static async index(req, res) {
    try {
      let products = await getAllCarts();
      let message = "Get data successfully";
      resData(res, 200, message, products);
    } catch (error) {
      resErrors(res, 500, error.message);
    }
  }
  static async findById(req, res) {
    const {id} = req.params;
    
  }
  static async create(req, res) {
    try {
      const data = req.body;
      const userId = Number(data.body.userId);
      const address = data.body.street + ", " + data.body.ward + ", " + data.body.district + ", " + data.body.city;
      const totalPrice = Number(data.body.totalPrice);
      const fullname = data.body.fullname;
      const phone = data.body.phone;
      const newData = {userId, address, totalPrice, fullname, phone };

      
      const order = await createOrder(newData);
      let message = "Get data successfully";
      const status = 200
      return res.json({status, message, order});

    } catch (error) {
      resErrors(res, 500, error.message);
    }
  }
}
module.exports = ApiOrderController;

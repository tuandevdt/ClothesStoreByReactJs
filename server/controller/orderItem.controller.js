const { where } = require("sequelize");
const { resErrors, resData } = require("./common/common");
const db = require("../models/index");
const { createOrderItem, findOrderItem } = require("../service/orderItemService");


class ApiOrderItemController {
  static async index(req, res) {
    try {
      let products = await db.Product.findAll();
      let message = "Get data successfully";
      resData(res, 200, message, products);
    } catch (error) {
      resErrors(res, 500, error.message);
    }
  }
  static async findById(req, res) {
    try {
      const {id} = req.params;
      console.log('id',id);
      
      const orderItems = await findOrderItem(id);
      
      let message = "Get data successfully";
      // res.json(orderItems)
      resData(res, 200, message, orderItems);
    } catch (error) {
      console.error(error);
    }    
  }
  static async create(req, res) {
    
    try {
      const datas = req.body;
      
      const data = datas.body;
      const { orderId, ...items } = data; 
      
      const orderItems = await Promise.all(
        Object.values(items.data).map((item) => createOrderItem(item, orderId))
      );
      
      return res.status(201).json({
        success: true,
        message: "Order items created successfully",
        data: orderItems,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Failed to create order items",
      });
    }
  }
  
}
module.exports = ApiOrderItemController;

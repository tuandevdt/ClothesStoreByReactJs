const { resErrors, resData } = require("./common/common");
const {
  createOrder,
  getOrders,
  updateOrder,
  getAllOrdersAdmin,
  getStatusOrderAdmin,
  countStatusOrder,
} = require("../service/orderService");
const { stat } = require("fs");

class ApiOrderController {
  static async index(req, res) {
    try {
      const { userid } = req.params;
      let orders = await getOrders(userid);
      res.json({ orders });
    } catch (error) {
      resErrors(res, 500, error.message);
    }
  }
  static async getOrdersAdmin(req, res) {
    try {
      const orders = await getAllOrdersAdmin();
      res.json({ orders });
    } catch (error) {
      resErrors(res, 500, error.message);
    }
  }
  static async getStatusOrder(req, res) {
    try {
      const { id } = req.params;
      const order = await getStatusOrderAdmin(id);
      res.json({ order });
    } catch (error) {
      resErrors(res, 500, error.message);
    }
  }

  static async countStatus(req, res) {
    try {
      const counts = await countStatusOrder()
      console.log('count controller', counts);
      
      res.json({ counts }); 
    } catch (error) {
      resErrors(res, 500, error.message);
    }
  }
  static async findById(req, res) {
    const { id } = req.params;
  }
  static async create(req, res) {
    try {
      const data = req.body;
      const userId = Number(data.body.userId);
      const address =
        data.body.street +
        ", " +
        data.body.ward +
        ", " +
        data.body.district +
        ", " +
        data.body.city;
      const totalPrice = Number(data.body.totalPrice);
      const fullname = data.body.fullname;
      const phone = data.body.phone;
      const newData = { userId, address, totalPrice, fullname, phone };

      const order = await createOrder(newData);
      let message = "Get data successfully";
      const status = 200;
      return res.json({ status, message, order });
    } catch (error) {
      resErrors(res, 500, error.message);
    }
  }
  static async update(req, res) {
    try {
      const { id } = req.params;
      const { status } = req.body;

      const update = await updateOrder({ status, id });

      res.json(update);
    } catch (error) {
      resErrors(res, 500, error.message);
    }
  }
}
module.exports = ApiOrderController;

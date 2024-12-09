const { where } = require("sequelize");
const { OrderItem, Order, Product, Color, Size } = require("../models")

const createOrderItem = async (data, orderId) => {
    
    try {
        const newData = {orderId, ...data}
        
        const orderItem = await OrderItem.create(newData)
        return orderItem;
    } catch (error) {
        console.error("Error creating orderItem:", error);
        throw error;
    }
}

const findOrderItem = async (id) => {
    try {
        const orderId = id;
        
        const orderItems = await OrderItem.findAll({
            where: { orderId },
            include: [
              {
                model: Product,
                as: 'product',
                attributes: ['id', 'name', 'price'], 
              },
              {
                model: Order,
                as: 'order',
              },
              {
                model: Color,
                as: 'color', 
                attributes: ['id', 'name', 'image'], 
              },
              {
                model: Size,
                as: 'size', 
                attributes: ['id', 'name'], 
              },
            ],
          });
          
          
        
        return orderItems;
    } catch (error) {
        console.error("Error creating orderItem:", error);
        throw error;
    }
}


module.exports = {
    createOrderItem,
    findOrderItem
}
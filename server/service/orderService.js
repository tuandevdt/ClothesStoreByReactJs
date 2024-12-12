const { where, Sequelize } = require("sequelize");
const { Order } = require("../models")

const getOrders = async (userId) => {
    try {
        const orders = await Order.findAll({
            where: { userId },
            order: [['createdAt', 'DESC']], 
          });        
        return orders;
    } catch (error) {
        console.error("Error creating cart:", error);
        throw error;
    }
}

const createOrder = async (data) => {
    console.log('dât order serivce', data);
    
    try { 
        const order = await Order.create(data)
        return order;
    } catch (error) {
        console.error("Error creating cart:", error);
        throw error;
    }
}

const updateOrder = async ({status, id}) => {
    try {        
        const order = await Order.update({status}, {where: {id}})        
        return order;
    } catch (error) {
        console.error("Error creating cart:", error);
        throw error;
    }
}

const getAllOrdersAdmin = async () => {
    try {
        const orders = await Order.findAll({
            order: [['createdAt', 'DESC']], 
        })
        return orders;
    } catch (error) {
        console.error("Error creating cart:", error);
        throw error;
    }
}

const getStatusOrderAdmin = async (id) => {
    try {
        const order = await Order.findOne({where: {id}})
        return order;
    } catch (error) {
        console.error("Error creating cart:", error);
        throw error;
    }
}

const countStatusOrder = async () => {
    try {
        const orderCounts = await Order.findAll();
        console.log(orderCounts);
        
        return orderCounts;
    } catch (error) {
        console.error("Error fetching order counts:", error);
        throw error; 
    }
};

module.exports = {
    createOrder,
    updateOrder,
    getOrders,
    getAllOrdersAdmin,
    getStatusOrderAdmin,
    countStatusOrder
}
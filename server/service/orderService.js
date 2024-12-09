const { Order } = require("../models")

const getOrders = async (userId) => {
    try {
        const orders = await Order.findAll({where: {userId}})
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

const updateOrder = async (status, id) => {
    try {
        const order = Order.update({status}, {where: {id}})
        return order;
    } catch (error) {
        console.error("Error creating cart:", error);
        throw error;
    }
}

module.exports = {
    createOrder,
    updateOrder,
    getOrders
}
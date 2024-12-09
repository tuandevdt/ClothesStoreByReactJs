const { where } = require("sequelize");
const { Cart, Product, Color, User, Size } = require("../models")

const createCart = async (data) => {
    try {
      const existingCart = await Cart.findOne({
        where: {
          userId: data.userId,
          colorId: data.colorId,
          sizeId: data.sizeId,
        },
      });
  
      if (existingCart) {
        existingCart.quantity += data.quantity; 
        await existingCart.save(); // Lưu thay đổi
        return existingCart; 
      } else {
        const cart = await Cart.create(data);
        return cart;
      }
    } catch (error) {
      console.error("Error creating cart:", error);
      throw error;
    }
  };

const getAllCarts = async (userId) => {
    try {
        const carts = await Cart.findAll({where: {userId}})
        return carts;
    } catch (error) {
        console.error("Error creating cart:", error);
        throw error;
    }
}

const getCart = async (productId, colorId, sizeId, userId) => {
    
    try {
      const cart = await Cart.findOne({
        where: {
          userId,
          productId,
          colorId,
          sizeId
        },
        include: [
          {
            model: Product,
            as: 'product',// Lấy thông tin sản phẩm
          },
          {
            model: Color,
            as: 'color',
            attributes: ['name','image'], 
          },
          {
            model: Size,
            as: 'size',
            attributes: ['name', 'stock'], 
          },
        ],
      });
  
      return cart;
    } catch (error) {
      console.error("Error fetching cart:", error);
      throw error;
    }
  };

const updateCart = async (id,quantity) => {
    try {
        const updateCart = await Cart.update(
            { quantity }, 
            { where: { id } } 
          );        
          return updateCart;
    } catch (error) {
        console.error("Error update cart:", error);
      throw error;
    }
}

const deleteCart = async (id) => {
    try {
        const deleteCart = await Cart.destroy({where: {id}})
        return deleteCart;
    } catch (error) {
        console.error("Error update cart:", error);
        throw error;
    }
}

const deleteAllCart = async (userId) => {
  try {
    const deleteCart = await Cart.destroy({where: {userId}})
    return deleteCart;
  } catch (error) {
    console.error("Error update cart:", error);
      throw error;
  }
}

module.exports = {
    createCart,
    getAllCarts,
    getCart,
    updateCart,
    deleteCart,
    deleteAllCart
}
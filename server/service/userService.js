const { where } = require("sequelize");
const { User } = require("../models")

const getAllUser = async () => {
    try {
        const users = await User.findAll();
        
        return users;
      } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
      }
}

const updateStatusUser = async (id, isActive) => {
    try {
        const data = await User.update({isActive}, {
            where: {
                id
            }
        })
        return data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
}

const getUser = async (id) => {
    try {
        const user = await User.findOne({where: {id}});
        return user;
    } catch (error) {
        console.error("Error fetching users:", error)
        throw error;
    }
}

module.exports = {
    getAllUser,
    updateStatusUser,
    getUser,
}
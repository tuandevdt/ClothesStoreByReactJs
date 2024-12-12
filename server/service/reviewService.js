const { where } = require("sequelize");
const { Review, User, Product, Color } = require("../models");

const createReview = async ({productId, userId, rating, text}) => {
    try {
        const review = await Review.create({productId, userId, rating, text});
        return review;
    } catch (error) {
        console.error("Error creating cart:", error);
        throw error;
    }
}
const getAllReviews = async (productId) => {
    try {
      const reviews = await Review.findAll({
        where: { productId },
        include: [
          {
            model: User,
            as: 'user',
            attributes: ['username', 'email'],
          },
        ],
        order: [['createdAt', 'DESC']],
      });
  
      return reviews;
    } catch (error) {
      console.error("Error fetching reviews:", error);
      throw error;
    }
  };

const updateReview = async ({id, text, rating}) => {
    try {
        const update = await Review.update(
            { text, rating }, 
            { where: { id } } 
          )
        return update;
    } catch (error) {
        console.error("Error fetching reviews:", error);
        throw error;
    }
}

const getAllReviewsAdmin = async () => {
  try {
    const reviews = await Review.findAll({
      include: [
          {
              model: Product,
              as: 'product',
              attributes: ['name'], 
              include: [
                  {
                      model: Color,
                      as: 'colors', 
                      attributes: ['image'] 
                  }
              ]
          }
      ]
  });    return reviews;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error;
  }
}

const deleteReview = async (id) => {
  try {
    const remove = await Review.destroy({where: {id}})
    return remove;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error;
  }
}

module.exports = {
    createReview,
    getAllReviews,
    updateReview,
    getAllReviewsAdmin,
    deleteReview
}
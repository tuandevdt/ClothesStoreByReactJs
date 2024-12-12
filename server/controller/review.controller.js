const { resErrors, resData } = require("./common/common");
const { 
  createReview, 
  getAllReviews, 
  updateReview, 
  getAllReviewsAdmin, 
  deleteReview 
} = require("../service/reviewService");

class ApiReviewController {
  static async index(req, res) {
    try {
        const {productId} = req.params;
      let reviews = await getAllReviews(productId);
      console.log('reviews',reviews);
      let message = "Get data successfully";
      resData(res, 200, message, reviews);

    } catch (error) {
      resErrors(res, 500, error.message);
    }
  }
  static async getReviewsAdmin(req, res) {
    try {
      const reviews = await getAllReviewsAdmin();
      res.json({reviews})
    } catch (error) {
      resErrors(res, 500, error.message);
    }
  }
  static async create(req, res) {
    try {
      const {productId, userId, rating, text} = req.body;      
      const review = await createReview({productId, userId, rating, text});
      let message = "create review successfully";
      const status = 200
      return res.json({status, message, review});

    } catch (error) {
      resErrors(res, 500, error.message);
    }
  }

  static async update(req, res) {
    try {
      const {id} = req.params;
      const {text, rating} = req.body;
      const update = await updateReview({id, text, rating});
      
      res.json(update)
    } catch (error) {
        resErrors(res, 500, error.message);
    }
  }
  static async delete(req, res) {
    try {
      const {id} = req.params;
      const remove = await deleteReview(id);
      res.json(remove)
    } catch (error) {
      resErrors(res, 500, error.message);
    }
  }
}
module.exports = ApiReviewController;

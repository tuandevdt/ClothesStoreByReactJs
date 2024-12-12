
const express = require('express');
const router = express.Router()
const ApiReviewController = require('../../controller/review.controller')

router.get("/", ApiReviewController.getReviewsAdmin)
router.delete("/:id", ApiReviewController.delete)

module.exports = router
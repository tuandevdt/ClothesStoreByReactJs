
const express = require('express');
const router = express.Router()
const ApiCategoryController = require('../../controller/category.controller')

router.get("/", ApiCategoryController.index)
router.post("/", ApiCategoryController.create)
router.patch("/:id", ApiCategoryController.update)
router.delete("/:id", ApiCategoryController.delete)

module.exports = router
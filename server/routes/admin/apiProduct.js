
const express = require('express');
const router = express.Router()
const ApiProductController = require('../../controller/product.controller')

router.get("/", ApiProductController.index)
router.post("/", ApiProductController.create)
router.put("/:id", ApiProductController.update)

module.exports = router

const express = require('express');
const router = express.Router()
const ApiProductController = require('../../controller/product.controller')

router.get("/", ApiProductController.index)
router.post("/", ApiProductController.create)
router.put("/:id", ApiProductController.update)
router.delete("/:id", ApiProductController.delete)
router.get("/top10price", ApiProductController.getTop10)

module.exports = router
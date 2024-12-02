
const express = require('express');
const router = express.Router()
const ApiUserController = require('../../controller/user.controller')
const ApiCategoryController = require("../../controller/category.controller")
const ApiProductController = require("../../controller/product.controller")
const ApiCartController = require("../../controller/cart.controller")
const ApiOrderController = require("../../controller/order.controller")
const ApiOrderItemController = require("../../controller/orderItem.controller")

router.get("/users", ApiUserController.index)
router.patch("/:id", ApiUserController.update)

router.get("/categories", ApiCategoryController.index)

router.get("/products", ApiProductController.index)
router.get("/products/:id", ApiProductController.findById)
router.get("/products/category/:id", ApiProductController.productByCategoryId)

router.get("/cart/:id", ApiCartController.index)
router.get("/cart", ApiCartController.findById)
router.post("/cart", ApiCartController.create)
router.delete("/cart/:id", ApiCartController.delete)
router.patch("/cart/:id", ApiCartController.update)

router.get("/order", ApiOrderController.index)
router.post("/order", ApiOrderController.create)

router.get("/order/:id", ApiOrderItemController.findById)
router.post("/orderItem", ApiOrderItemController.create)

module.exports = router
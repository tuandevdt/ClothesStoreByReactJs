
const express = require('express');
const router = express.Router()
const ApiOrderController = require('../../controller/order.controller')

router.get("/", ApiOrderController.getOrdersAdmin)
router.get("/status/:id", ApiOrderController.getStatusOrder)
router.patch("/:id", ApiOrderController.update)
router.get("/countStatus", ApiOrderController.countStatus)

module.exports = router
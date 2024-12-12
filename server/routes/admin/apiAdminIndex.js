
const express = require('express');
const router = express.Router()
const UserAdminRoute = require("./apiUser")
const CategoryAdminRoute = require("./apiCategory")
const ProductAdminRoute = require("./apiProduct")
const OrderAdminRoute = require("./apiOrder")
const ReviewAdminRoute = require("./apiReview")

router.use("/users", UserAdminRoute)
router.use("/categories", CategoryAdminRoute)
router.use("/products", ProductAdminRoute)
router.use("/orders", OrderAdminRoute)
router.use("/reviews", ReviewAdminRoute)


module.exports = router
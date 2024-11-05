
const express = require('express');
const router = express.Router()
const UserAdminRoute = require("./apiUser")

router.use("/users", UserAdminRoute)

module.exports = router
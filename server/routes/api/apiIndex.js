const express = require('express');
const router = express.Router()
const jwt = require('jsonwebtoken');

const AdminRoute = require("./admin/apiUser");

router.use("/admin", AdminRoute)

module.exports = router
const express = require("express");
const router = express.Router();
const createadmin = require("../controllers/createAdmin");
const authAdmin = require("../controllers/authAdmin");

router.post('/createadmin', createadmin)

router.post('/login', authAdmin)

module.exports = router;
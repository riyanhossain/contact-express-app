const express = require("express");
const router = express.Router();
const createadmin = require("../controllers/createAdmin");
const authAdmin = require("../controllers/authAdmin");

router.post('/login', createadmin)

router.get('/login', authAdmin)

module.exports = router;
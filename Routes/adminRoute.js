const express = require("express");
const router = express.Router();
const createadmin = require("../controllers/createAdmin");
const authAdmin = require("../controllers/authAdmin");
const { allContacts } = require("../controllers/contacts");

router.post('/createadmin', createadmin)

router.post('/login', authAdmin)

router.get('/allcontacts', allContacts)

module.exports = router;
const express = require("express");
const router = express.Router();
const upload = require("../Middleware/uploadMiddleware");
const { postContacts, getContacts } = require("../Controllers/contacts");

router.post("/contacts", upload.single("avatar"), postContacts);

router.get("/contacts", getContacts);

module.exports = router;

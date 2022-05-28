const express = require("express");
const router = express.Router();
const upload = require("../Middleware/uploadMiddleware");
const { postContacts, getContacts, deleteContacts } = require("../Controllers/contacts");

router.post("/contacts", upload.single("avatar"), postContacts);

router.get("/contacts", getContacts);

router.delete("/contacts/delete/:id", deleteContacts);

module.exports = router;

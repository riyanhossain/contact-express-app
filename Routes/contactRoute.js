const express = require("express");
const router = express.Router();
const upload = require("../Middleware/uploadMiddleware");
const { postContacts, getContacts, deleteContacts, updateContacts, updateContactsBody } = require("../Controllers/contacts");

router.post("/contacts", upload.single("avatar"), postContacts);

router.get("/contacts", getContacts);

router.delete("/contacts/delete/:id", deleteContacts);

router.put("/contacts/updatecontact/:id", upload.single("avatar"), updateContacts);

router.patch("/contacts/updatecontactbody/:id", updateContactsBody);

module.exports = router;

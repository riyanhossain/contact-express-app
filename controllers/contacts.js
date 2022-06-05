const contact = require("../Models/contacts");
const fs = require("fs");

const postContacts = async (req, res) => {
  const newUrl = new URL(`${req.protocol}://${req.get("host")}`);
  try {
    req.body.avatar = newUrl.origin + "/uploads/" + req.file.filename;
    req.body.fileName = req.file.filename;
    const newContact = new contact(req.body);
    await newContact.save();
    res.status(200).json({
      message: "Contact added successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const getContacts = async (req, res) => {
  const Offset = isNaN(req.query.page)
    ? 1
    : parseInt(req.query.page) <= 1
    ? 1
    : parseInt(req.query.page);
  try {
    const contacts = await contact.paginate(
      {},
      { offset: 8 * (Offset - 1), limit: 8 }
    );
    if (contacts.totalPages >= Offset) {
      res.status(200).json({
        message: "Contacts fetched successfully",
        contacts: contacts.docs,
        nextPage: Offset + 1,
        prevPage: Offset - 1,
        totalPages: contacts.totalPages,
      });
    } else {
      res.status(200).json({
        message: "constacts not found",
        prevPage: Offset - 1,
      });
    }
  } catch {
    (err) => {
      res.status(500).json({
        message: err.message,
      });
    };
  }
};

const deleteContacts = async (req, res) => {
  try {
    const contacts = await contact.findByIdAndDelete(req.params.id);
    if (!contacts) {
      res.status(404).json({
        message: "Contact not found",
      });
    } else {
      fs.unlinkSync(`public/uploads/${contacts.fileName}`);
      res.status(200).json({
        message: "Contact deleted successfully",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const updateContacts = async (req, res) => {
  const newUrl = new URL(`${req.protocol}://${req.get("host")}`);
  try {
    req.body.avatar = newUrl.origin + "/uploads/" + req.file.filename;
    req.body.fileName = req.file.filename;
    const contacts = await contact.findByIdAndUpdate(req.params.id, req.body);
    if (!contacts) {
      res.status(404).json({
        message: "Contact not found",
      });
    } else {
      fs.unlinkSync(`public/uploads/${contacts.fileName}`);
      res.status(200).json({
        message: "Contact updated successfully",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const updateContactsBody = async (req, res) => {
  try {
    console.log(req.body);
    const contacts = await contact.findByIdAndUpdate(req.params.id, req.body);
    if (!contacts) {
      res.status(404).json({
        message: "Contact not found",
      });
    } else {
      res.status(200).json({
        message: "Contact updated successfully",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const allContacts = async (req, res) => {
  try {
    const contacts = await contact.find();
    if (!contacts) {
      res.status(404).json({
        message: "Contact not found",
      });
    } else {
      res.status(200).json({
        message: "Contacts fetched successfully",
        contacts: contacts,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const updatePermission = async (req, res) => {
  try {
    const contacts = await contact.findByIdAndUpdate(req.params.id, req.body);
    if (!contacts) {
      res.status(404).json({
        message: "Contact not found",
      });
    } else {
      res.status(200).json({
        message: "Contact updated successfully",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}

module.exports = { postContacts, getContacts, deleteContacts, updateContacts , allContacts, updatePermission, updateContactsBody};

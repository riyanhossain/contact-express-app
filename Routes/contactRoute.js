const express = require('express');
const router = express.Router();
const contact = require('../Models/contacts');
const mongoosePaginate = require('mongoose-paginate-v2');


router.post('/contacts', async (req, res) => {
    try {
         await new contact(req.body).save();
        res.status(200).json({
            message: 'Contact added successfully',
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
})

router.get('/contacts', (req, res) => {
    const Offset = parseInt(req.query.page) <= 1 ? 1 : parseInt(req.query.page);
    contact.paginate({}, {offset:  8*(Offset-1), limit: 8 })
    .then(contacts => {
        if(contacts.totalPages >= Offset) {
            res.status(200).json({
                message: 'Contacts fetched successfully',
                contacts: contacts.docs,
                nextPage: Offset + 1,
            });
        } else{
            res.status(200).json({
                message: 'constacts not found',
            });
        }

    })
    .catch(err => {
        res.status(500).json({
            message: err.message
        });
    })
})

module.exports = router;
const express = require('express');
const router = express.Router();
const contact = require('../Models/contacts');
const upload = require('../Middleware/uploadMiddleware');
const {URL} = require('url');

router.post('/contacts', upload.single('avatar') , async (req, res) => {
    const newUrl = new URL(`${req.protocol}://${req.get('host')}`);
    try {
        const newContact = new contact({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            location : req.body.location,
            occupation : req.body.occupation,
            permission : req.body.permission,
            bloodGroup : req.body.bloodGroup,
            birthDate : req.body.birthDate,
            fbIdLink : req.body.fbIdLink,
            avatar : newUrl.origin +'/uploads/' + req.file.filename,
        });
        await newContact.save();
        res.status(200).json({
            message: 'Contact added successfully',
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
})

router.get('/contacts', async (req, res) => {
    const Offset = isNaN(req.query.page) ? 1 : parseInt(req.query.page) <= 1 ? 1 : parseInt(req.query.page);
    try{
        const contacts = await contact.paginate({}, {offset:  8*(Offset-1), limit: 8 })
        if(contacts.totalPages >= Offset) {
            res.status(200).json({
                message: 'Contacts fetched successfully',
                contacts: contacts.docs,
                nextPage: Offset + 1,
                prevPage: Offset - 1,
                totalPages: contacts.totalPages
            });
        } else{
            res.status(200).json({
                message: 'constacts not found',
                prevPage: Offset - 1,
            });
        }

    }
    catch{err => {
        res.status(500).json({
            message: err.message
        });
    }}
})

module.exports = router;
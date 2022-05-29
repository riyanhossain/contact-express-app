const contact = require('../Models/contacts');


const search =  async (req, res) => {
    try {
        const contacts = await contact.find(
            {name :{
                $regex: req.query.name,
                $options: "i"
            }}
        );
        if(contacts.length > 0){
            res.status(200).json({
                message: "Contacts fetched successfully",
                contacts: contacts
            });
        }else{
            res.status(404).json({
                message: "Contacts not found",
            });
        }
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

module.exports = search;
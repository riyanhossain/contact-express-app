const adminModel = require("../Models/admin");
const { hashIt } = require('../utilities/encyption');

const createadmin = async (req, res) => {
    try{
        const admin = new adminModel({
            email: req.body.email,
            password: await hashIt(req.body.password),
        })
        await admin.save();
        res.status(200).json({
            message: 'admin created',
        });
    }
    catch(err){
        res.status(500).json({
            message: err.message,
        });
    }
} 

module.exports = createadmin;
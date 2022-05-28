const adminModel = require("../Models/admin");
const { compareIt } = require('../utilities/encyption');

const authAdmin = async (req, res) => {
    try{
        const admin = await adminModel.findOne({
            email: req.body.email,
        })
        if(!admin){
            res.status(404).json({
                message: 'Invalid email or password',
                Admin: false,
            });
        }else{
            if(await compareIt(req.body.password, admin.password)){
                res.status(200).json({
                    message: 'Valid admin',
                    Admin : true,
                });
            }else{
                res.status(401).json({
                    message: 'wrong password',
                    Admin: false,
                });
            }
        }
    }
    catch(err){
        res.status(500).json({
            message: err.message,
        });
    }
}

module.exports = authAdmin;
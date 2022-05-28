const mongoose = require('mongoose');
const {hashIt} = require('../utilities/encyption');

async function createAdmin(){
    const adminModel = require('../Models/admin');

    const admin = await adminModel.findOne({
        email: 'admin@gmail.com'
    })
    if(!admin){
        const newadmin = new adminModel({
            email: 'admin@gmail.com',
            password:  await hashIt('admin'),
        });
        try{
            await newadmin.save();
            console.log('admin created');
        }
        catch(err){
            console.log(err.message);
        }       
    }else{
        console.log('admin already exists');
    }

}
module.exports = createAdmin;
const {hashIt} = require('../utilities/encyption');

async function createAdmin(){
    const adminModel = require('../Models/admin');
    const admin = new adminModel({
        email: 'admin@gmail.com',
        password:  await hashIt('admin'),
    });
    try{
        await admin.save();
        console.log('admin created');
    }
    catch(err){
        console.log(err.message);
    }
}
module.exports = createAdmin;
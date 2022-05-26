const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const validateEmail = (email) => {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    phone: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    permission : {
        type : Boolean,
        default : false
    },
    bloodGroup : ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    birthDate : {
        type : Date,
        required : true
    }
});

contactSchema.plugin(mongoosePaginate);

module.exports = new mongoose.model('contact', contactSchema);
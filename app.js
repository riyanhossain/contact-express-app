const express = require('express');
const cors = require('cors');
const connect = require('./dbConnect/dbConnect');
const { notFound, errorHandler } = require('./Middleware/errorMidleware');
const contactRoute = require('./Routes/contactRoute');
const path = require('path');
const adminRoute = require('./Routes/adminRoute');
const createAdmin = require('./utilities/createAdmin');
const searchRoute = require('./Routes/searchRoute');



const app = express();

//External middleware
app.use(cors());
require('dotenv').config();

//connect to db
connect();

//creating admin
createAdmin();

// Internal middleware
app.use(express.json());
app.use( express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.use('/api', contactRoute);
app.use('/api', adminRoute);
app.use('/api', searchRoute);

// server route
app.get('/', (req, res) => {
    res.send(`Server is running on port ${process.env.PORT}`);
})

//bad request
app.get('*', (req, res) => {
    res.status(404).json({
        message: 'Page not found'
    });
})

//error handling
app.use(notFound)
app.use(errorHandler)

// listing to the server
app.listen(process.env.PORT,() => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
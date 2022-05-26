const express = require('express');
const cors = require('cors');
const connect = require('./dbConnect/dbConnect');
const { notFound, errorHandler } = require('./errorMidleware');
const contactRoute = require('./Routes/contactRoute');



const app = express();

//External middleware
app.use(cors());
require('dotenv').config();

//connect to db
connect();

// Internal middleware
app.use(express.json());

// Routes
app.use('/api', contactRoute);

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
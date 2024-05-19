const express = require('express');
const app = express();
const errorMiddleware = require('./middleware/error')
const cookieParser = require('cookie-parser')
const cors = require('cors')

app.use(cors({
    origin: 'https://intern-test-frontend.onrender.com', // Allow requests from this origin
    credentials: true, // Allow cookies to be sent with the request
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    optionsSuccessStatus: 204,
}));

//using middlewares
app.use(cookieParser());
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit:'50mb',extended:true}));

const user = require("./routes/userRoute");

app.use("/api/v1",user)


module.exports = app
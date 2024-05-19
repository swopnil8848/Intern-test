const app = require('./app');
const dotenv = require("dotenv")
const cloudinary = require('cloudinary')
const { connectDatabase } = require('./config/database')


//congig 
dotenv.config({path:'config/config.env'})

connectDatabase();

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret:process.env.CLOUDINARY_SECRET
})

app.listen(process.env.PORT,()=>{
    console.log(`server is working on http://localhost:${process.env.PORT}`)
})

const express=require('express')
const app=express()
const dotenv=require('dotenv')
const path=require('path')
const connectdatabase=require('./config/connectDB')

// Load environment variables from 'config/config.env' file using the dotenv package
dotenv.config({path:path.join(__dirname,'config','config.env')})

connectdatabase();

app.use(express.json()) // to convert given data into json data

const products=require('./routes/products')
const order=require('./routes/order')

app.use('/api/v1',products)
app.use('/api/v1',order)


app.listen(process.env.PORT,()=>{
    console.log("Server is running on port 3000");
    
})
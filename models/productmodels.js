// models define the shape and structure of dat

const mongoose=require('mongoose')

const productschema=new mongoose.Schema({
    name:String,
    price:String,
    description:String,
    ratings:String,
    images:[ 
        {image:String}
    ],
    category:String,
    seller:String,
    stock:String,
    numOfReviews:String,
    createdAt:Date
       
})

const productModel=mongoose.model('Product',productschema)

module.exports=productModel;



// using product model we handle operations in product controller
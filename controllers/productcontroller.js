const productModel=require('../models/productmodels')

// GET all products 
exports.getproducts=async(req,res,next)=>{
  
   const products= await productModel.find({});

    res.json({
        success:true,
        products
    })
}

// GET Single product
exports.getSingleProduct=async(req,res,next)=>{
    
    try{
        const singleproduct= await productModel.findById(req.params.id) //finding the products by id
        res.json({
            success:true,
            singleproduct
        })
    }
    catch(error){
        res.status(404).json({
            success:false,
            message:'Unable to get the product'

        })
    }

    
}
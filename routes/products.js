const express=require('express')
const { getproducts, getSingleProduct } = require('../controllers/productcontroller')
const router=express.Router()

// Handle the GET request for the '/products' route (for get all products)
router.route('/products').get(getproducts)

// Handle the GET request for the '/products:id' route (for get a single product)
router.route('/products/:id').get(getSingleProduct)

module.exports=router
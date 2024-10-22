const ordermodel = require("../models/ordermodel");

exports.createorder=async(req,res,next)=>{

    const cartitems=req.body;
    
    // for calculating total amount using reduce function
    const amount=Number(cartitems.reduce((acc,item)=>(acc+item.product.price*item.qty),0)).toFixed(2)
    const status='pending'
    const order= await ordermodel.create({cartitems,amount,status})
    
    res.json({
        success:true,
        order
    })

}
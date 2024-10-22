const mongoose=require('mongoose')

const orderschema=new mongoose.Schema({
    cartitems:Array,
    amount:String,
    status:String,
    createdAt:Date
})

const ordermodel=mongoose.model('Order',orderschema)

module.exports=ordermodel;
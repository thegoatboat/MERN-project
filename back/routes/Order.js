const Order= require('../models/Order')
const OrderRouter=require("express").Router();

const { verifyToken, verifyTokenAndAUthorization, verifyTokenAndAdmin } = require("./verifyToken");



OrderRouter.post("/",verifyToken, async (req,res)=>{
   const newOrder = new Order(req.body)
   try{
    const savedOrder=await newOrder.save();
    res.status(200).json(savedOrder)
   }catch(err){
    res.status(500).json(err)
   }
})
OrderRouter.put("/:id",verifyTokenAndAdmin, async(req,res)=>{
    
    try{
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id,{
            $set: req.body
        },{new:true})
        res.status(200).json(updatedOrder)
    }catch(err){
        res.status(500).json(err)

    }
})
//delete

OrderRouter.delete("/:id", verifyTokenAndAdmin,async (req,res)=>{
    try{
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json('Order has been deleted ')
    }catch(err){
        res.status(500).json(err)
    }
})
// GET User Orders
OrderRouter.get("/find/:id",verifyTokenAndAUthorization, async (req,res)=>{
    try{
        const Orders = await Order.find(req.params.id)
        res.status(200).json(Order)
    }catch(err){
        res.status(500).json(err)
    }
})

//GET ALL 
OrderRouter.get("/", verifyTokenAndAdmin, async (req,res)=>{
   
    try{
        const Orders = await Order.find()
        res.status(200).json(Orders)
    }catch(err){
        res.status(500).json(err)
    }
})
// GET MONTHLY INCOME

OrderRouter.get('/income',verifyTokenAndAdmin,async(req,res)=>{
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth()-1))
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth()-1))

    try{
        const income = await Order.aggregate([
            { $match: {createdAt :{$gte: previousMonth}}},
            {
                $project:{
                    month: {$month:"$createdAt"},
                    sales:"$amount"
                },
            },
            {
                   $group:{
                    _id:"$month",
                    total:{ $sum: "$sales"},
                },
            }
            
       
    ])
    res.status(200).json(income);
    } catch (err){
        res.status(500).json(err)
    }
})


module.exports=OrderRouter
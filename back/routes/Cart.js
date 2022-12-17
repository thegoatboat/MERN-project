const Cart = require('../models/Cart')
const CartRouter=require("express").Router();

const { verifyToken, verifyTokenAndAUthorization, verifyTokenAndAdmin } = require("./verifyToken");



CartRouter.post("/",verifyToken, async (req,res)=>{
   const newCart = new Cart(req.body)
   try{
    const savedCart=await newCart.save();
    res.status(200).json(savedCart)
   }catch(err){
    res.status(500).json(err)
   }
})
CartRouter.put("/:id",verifyTokenAndAUthorization, async(req,res)=>{
    
    try{
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id,{
            $set: req.body
        },{new:true})
        res.status(200).json(updatedCart)
    }catch(err){
        res.status(500).json(err)

    }
})
//delete

CartRouter.delete("/:id", verifyTokenAndAUthorization,async (req,res)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json('Cart has been deleted ')
    }catch(err){
        res.status(500).json(err)
    }
})
// GET User Cart
CartRouter.get("/find/:id",verifyTokenAndAUthorization, async (req,res)=>{
    try{
        const Cart = await Cart.findOne({id:req.params.id})
        res.status(200).json(Cart)
    }catch(err){
        res.status(500).json(err)
    }
})

//GET ALL 
CartRouter.get("/", verifyTokenAndAdmin, async (req,res)=>{
   
    try{
        const Carts = await Cart.find()
        res.status(200).json(Carts)
    }catch(err){
        res.status(500).json(err)
    }
})



module.exports=CartRouter
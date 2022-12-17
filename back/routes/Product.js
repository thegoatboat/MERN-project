const Product = require("../models/Product");
const { verifyToken, verifyTokenAndAUthorization, verifyTokenAndAdmin } = require("./verifyToken");

const ProductRouter=require("express").Router();


ProductRouter.post("/",verifyTokenAndAdmin, async (req,res)=>{
   const newProduct = new Product(req.body)
   try{
    const savedProduct=await newProduct.save();
    res.status(200).json(savedProduct)
   }catch(err){
    res.status(500).json(err)
   }
})
ProductRouter.put("/:id",verifyTokenAndAUthorization, async(req,res)=>{
    if(req.body.password){
        req.body.password=CryptoJS.AES.encrypt(req.body.password,process.env.PASS_SEC).toString();

    }
    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,{
            $set: req.body
        },{new:true})
        res.status(200).json(updatedProduct)
    }catch(err){
        res.status(500).json(err)

    }
})
//delete

ProductRouter.delete("/:id", verifyTokenAndAdmin,async (req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json('Product has been deleted ')
    }catch(err){
        res.status(500).json(err)
    }
})
// GET PRODUCT
ProductRouter.get("/find/:id", async (req,res)=>{
    try{
        const Product = await Product.findById(req.params.id)
        res.status(200).json(Product)
    }catch(err){
        res.status(500).json(err)
    }
})

//GET ALL PRODUCT
ProductRouter.get("/",async (req,res)=>{
    const qNew=req.query.new;
    const qCategory=req.query.category

    try{
        let Products ; 
        
      
        if (qNew){
            Products=await Product.find().sort({_id: -1}).limit(5)
        }else if (qCategory){
            Products=await Product.find({categoties:{
                $in:[qCategory],
            }});
        }else{
            Products=await Product.find()
        }

        res.status(200).json(Products)
    }catch(err){
        res.status(500).json(err)
    }
})

//GET USER STATS

ProductRouter.get("/stats", verifyTokenAndAdmin, async(req,res)=>{

    const date=new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear()-1))

    try{

        const data = await User.aggregate([
            {$match: {createdAt: {$gte: lastYear}}},
            {
                $project:{
                month:{$month:"$createdAt"},
            },},
            {
                $group:{
                    _id:"$month",
                    total:{$sum:1},
                }
            }
        ])
        res.status(200).json(data)
    }catch(err){
        res.status(500).json(err)
    }
})



module.exports=ProductRouter
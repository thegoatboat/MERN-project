const router=require('express').Router();

const stripe =require('stripe')(process.env.STRIPE_KEY)

router.post('/payment',(req,res)=>{

    stripe.chatges.create({
        source:req.body.tokenId,
        amount:req.body.tokenId,
        currency:"usd",
    })
    
})

module.exports = router;

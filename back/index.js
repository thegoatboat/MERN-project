const express = require("express")
const  mongoose  = require("mongoose")
const app = express()
const dotenv= require("dotenv")
const userRoute=require("./routes/users")
const authRoute=require('./routes/auth')
const productRoute=require('./routes/Product')
const orderRoute = require("./routes/Order")
const cartRoute = require("./routes/Cart")
const stripeRoute=require("./routes/stripe")
const cors=require('cors')


dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>console.log("DB connect with succes"))
    .catch((err)=>{
    console.log(err);
})
app.use(cors())
app.use(express.json())
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/products",productRoute)
app.use("/api/orders",orderRoute)
app.use("/api/carts",cartRoute)
app.use("/api/checkout",stripeRoute)

app.listen(process.env.PORT,()=>{
    console.log(`backend server is running to ${process.env.PORT}` )
})
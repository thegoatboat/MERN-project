
    import "./Style.scss";
    import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
    import { useSelector } from "react-redux";
    import { removeItem, resetCart } from "../store/cartSlice";
    import { useDispatch } from "react-redux";
   import StripeCheckout from "react-stripe-checkout"
    import { loadStripe } from "@stripe/stripe-js";
    import { useState } from "react";
    import { useEffect } from "react";
    import {userRequest} from "../requestMethod"
    import {useNavigate} from "react-router"
    const KEY = "pk_test_51MBfkhDVetAhHWaOeCn2nVCvPDUH90Cc0Xtz0kDMLkiNwA4wv1PjI2NUK5wSHQ3JSESkZJgAQfXM4E19Z0kuKe6B00VCtxfznl";
    console.log(KEY)
    const Myshop = () => {
      const navigate=useNavigate()
        const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
 
  const onToken = (token) => {
    setStripeToken(token);
    
  };
  useEffect(()=>{
    const makeRequest = async ()=>{
      try {
        const res = await userRequest("/checkout/payment",{
          tokenId:stripeToken.id,
          amount:cart.total * 100,
         
        })
        navigate ('/success',{
          data:res.data,
          products:cart,
        })
      } catch (error) {
        console.log(error)
      }
    }
    stripeToken && makeRequest();
  },[stripeToken,cart.total,navigate]);


      const products = useSelector((state) => state.cart.products);
      const dispatch = useDispatch();
        console.log(products)
      const totalPrice = () => {
        let total = 0;
        products.forEach((item) => {
          total += item.quantity * item.price;
        });
        return total.toFixed(2);
      };
     
      
      return (
        <div className="cart">
          <h1>Products in your cart</h1>
          {products?.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.img} alt="" />
              <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc?.substring(0, 100)}</p>
                <div className="price">
                  {item.quantity} x ${item.price}
                </div>
              </div>
              <DeleteOutlinedIcon
                className="delete"
                onClick={() => dispatch(removeItem(item.id))}
              />
            </div>
          ))}
          <div className="total">
            <span>SUBTOTAL</span>
            <span>${totalPrice()}</span>
          </div>
          
          <StripeCheckout
              name="Trab Design"
              image="https://scontent.ftun2-2.fna.fbcdn.net/v/t39.30808-6/301117151_581499767008512_1878212545866027047_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_Y6oL57QF68AX-DhrT7&_nc_ht=scontent.ftun2-2.fna&oh=00_AfD9Iuj1C8Taz5Qr34cJIskvpq-onGG7rU_8GJtCjUdL0w&oe=63A040A5"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
          </StripeCheckout>
          <span className="reset" onClick={() => dispatch(resetCart())}>
            Reset Cart
          </span>
        </div>
      );
    };
   

export default Myshop
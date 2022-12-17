import React from "react";
import { useState } from "react";
import { data } from "./data";
import "./Style.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/cartSlice";


const Product = () => {
  const ID =useParams().id;
    const prod= data.find((el) => el.id === (ID))
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  

  return (
    <div className="product">
      { (
        <>
          <div className="left">
           
              <img
                src={prod.img} alt=""   height="35%"/>

          
          </div>

          <div className="right">
            <h1>{prod.titel}</h1>
            <span className="price">${prod.price}</span>
            <p>{prod.desc}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addProduct({
                    id: prod.id,
                    title: prod.titel,
                    desc: prod.desc,
                    price: prod.price,
                    img: prod.img,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              
            </div>
            
          
            
          </div>
        </>
      )}
    </div>
  );
};

export default Product;


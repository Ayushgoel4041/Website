// Cart.js

import { Button } from "@chakra-ui/react";
import React from "react";
import { BiRecycle } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../features/cartSlice";
import '../styles/cart.scss';
import { RiDeleteBin6Line } from 'react-icons/ri'
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const gstRate = 0.025; // 2.5% GST

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity({ id }));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity({ id }));
  };

  // Calculate total price including GST
  const totalPriceWithGST = totalPrice * (1 + gstRate);

  return (
    <div>
      <div className="shopping_cart">
        <h2>#Shopping Cart</h2>
      </div>

      <div className="cart_items">

        <ul className="items">
          {cartItems.map((item) => (
            <li key={item.id}>
              <div className="img">

                <img src={item.img} alt="" />
              </div>
              <div className="text">

                <h1>{item.article}</
                h1>
                <h1>{item.name}</h1>
                <div className="quantity">
                  <h2>Quantity</h2>
                  <div className="utton">

                    <Button onClick={() => handleDecrement(item.id)}>-</Button>
                  </div>
                  <div className="utton">
                    <p>{item.quantity}</p>
                  </div>
                  <div className="utton">
                    <Button onClick={() => handleIncrement(item.id)}>+</Button>
                  </div>
                </div>
                <div className="rem">

                <Button onClick={() => handleRemoveFromCart(item.id)}>
                  Remove         <RiDeleteBin6Line />
                </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="cart_detail">
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Price (including GST 2.5%): Rs {totalPriceWithGST.toFixed(2)}</p>
        <Button color={'black'} bgColor={'white'}>BUY NOW</Button>
      </div>
    </div>
  );
};

export default Cart;

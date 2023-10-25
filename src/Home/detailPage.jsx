import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import products from "../products/products";
import "../styles/detailspage.scss";
import Footer from "./Footer";
import { Button, Toast } from '@chakra-ui/react'
import { Toaster } from "react-hot-toast";
const DetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const navigate = useNavigate();
  const handleAddToCart = () => {
    dispatch(addToCart({ id: product.id }));
    // navigate("/cart");
    <Toaster position="top-center" toastOptions={{ duration: 4000 }} />

  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>

      <div className="detail">
        <img src={product.img} alt={product.name} />
        <div className="text">
          <h1 className="art">{product.article}</h1>
          <h1>{product.name}</h1>
          <p>{product.details}</p>
          <h2>{product.discount}</h2>
          <h3>{product.price}</h3>
        <div className="but">
          <button onClick={handleAddToCart}>Add To Cart</button>
        </div>
        </div>


      </div>
      <div className="footer">
        <Footer />
      </div>

    </>
  );
};

export default DetailPage;

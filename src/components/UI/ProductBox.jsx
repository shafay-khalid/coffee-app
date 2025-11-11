import React from "react";
import { NavLink } from "react-router-dom";

const ProductBox = ({animation}) => {
  const productData = [
    { img: "product-coffee-1.svg", name: "Classic Coffee", price: "$17.90" },
    { img: "product-coffee-2.svg", name: "Black Coffee", price: "$24.90" },
    { img: "product-coffee-3.svg", name: "Strong Coffee", price: "$32.90" },
  ];
  return (
    <>
      {productData.map((item, idx) => {
        return <NavLink to={`/shop/${item.name}`}>
          <div key={idx} className={`product cursor-pointer flex items-center flex-col font-pacifico ${animation > 450 ? `animate-productMove` : ''}`}>
          <img src={`/imgs/${item.img}`} alt={`product ${idx + 1}`} />
          <h5>{item.name}</h5>
          <h6>{item.price}</h6>
        </div>
        </NavLink>
      })}
    </>
  );
};

export default ProductBox;

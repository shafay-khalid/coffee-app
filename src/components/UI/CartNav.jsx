import React from "react";

const CartNav = () => {
  return (
    <div className="cart-header flex items-center justify-between w-full text-black bg-[#f7f7f7] px-15 py-2">
      <p>Product</p>
      <p>Name</p>
      <p>Serving Size</p>
      <p>Quantity</p>
      <p>Price</p>
    </div>
  );
};

export default CartNav;
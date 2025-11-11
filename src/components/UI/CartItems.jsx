import React from "react";
import { NavLink } from "react-router-dom";

const CartItems = ({ item }) => {
  return (
    <NavLink className="w-full" to={`/shop/${item.name}`}>
      <div className="item border-2 border-transparent cursor-pointer bg-white px-4 py-2 flex items-center justify-between w-full rounded-xl">
        <div className="item-left rounded-xl px-4 bg-white py-2 h-20">
          <img className="h-full" src={item.img} alt="img" />
        </div>
        <div className="item-right-container w-[75%] flex items-center justify-between font-medium">
          <div className="item-inner-left flex w-[36%] justify-between items-center">
            <div className="item-info w-[18%]">
            <p>{item.name}</p>
          </div>
          <div className="item-serving-size w-[18%]">
            <p>{item.size}</p>
          </div>
          </div>
          <div className="item-inner-right flex w-[36%] justify-between">
            <div className="item-value w-[18%]">
              <p>{item.quantity}</p> {/* ✅ dynamic quantity */}
            </div>
            <div className="item-quantity w-[18%]">
              <p>${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default CartItems;

import React from "react";

const OrderSummaryItem = ({item}) => {
  return (
    <div className="flex justify-between w-full text-gray-700 items-center">
      <span className="w-[40%]">{item.name}</span>
      <span className="w-[20%] text-center">{item.quantity}</span>
      <span className="w-[30%] text-center">${(item.price*item.quantity).toFixed(2)}</span>
    </div>
  );
};

export default OrderSummaryItem;

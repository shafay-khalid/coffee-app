import React from "react";
import Button1 from "./Button1";
import CheckoutButton from "./CheckoutButton";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Checkout = ({ combinedItems }) => {
  const totalPrice = combinedItems.reduce((acc, item) => {
    const qty = item.quantity ? item.quantity : 1;
    return (acc + Number(item.price) * qty);
  }, 0);

  return (
    <div className="check-out bg-[#fff] w-full min-h-30 h-auto rounded flex flex-col p-5 text-black font-medium mb-20">
      <div className="check-out-top flex justify-between w-full pb-2">
        <h3 style={{ fontSize: "20px" }}>Subtotal</h3>
        <h3 style={{ fontSize: "20px" }}>${totalPrice.toFixed(2)}</h3>
      </div>
      <hr className="text-[#EFF0F2] border-1" />
      <div className="check-out-center">
        <p
          style={{ fontSize: "10px" }}
          className="text-[#6B7281] font-medium text-center my-3"
        >
          Shipping taxes, and discounts calculated at checkout
        </p>
      </div>
      <div className="check-out-bottom flex gap-5 w-full min-h-15 justify-center items-center">
        <CheckoutButton
          color={"bg-[#111828]"}
          text={"Back to Shop"}
          icon={<MdKeyboardArrowLeft style={{ fontSize: "20px" }} />}
        />
        {!localStorage.getItem("items") >= 1 ? (
          <h5 className="w-1/2">Cart is empty, cannot check out</h5>
        ) : (
          <CheckoutButton
            totalPrice={totalPrice}
            color={"bg-[#5046E5]"}
            text={"Checkout"}
            icon={<MdKeyboardArrowRight style={{ fontSize: "20px" }} />}
          />
        )}
      </div>
    </div>
  );
};

export default Checkout;

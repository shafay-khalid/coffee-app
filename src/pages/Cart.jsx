import React from "react";
import CartItems from "../components/UI/CartItems";
import CartNav from "../components/UI/CartNav";
import Checkout from "../components/UI/Checkout";

const Cart = () => {
  const items = JSON.parse(localStorage.getItem("items")) || [];

  // ✅ Combine duplicates
  const combinedItems = items.reduce((acc, item) => {
    const existing = acc.find((i) => i.name === item.name);
    if (existing) {
      existing.quantity = (existing.quantity || 1) + 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  localStorage.setItem("newItems", JSON.stringify(combinedItems));

  return (
    <section className="cart-page min-h-screen h-auto w-full bg-white flex items-center justify-center p-20">
      <main className="flex flex-col w-full items-center justify-center gap-10">
        <h2 className="text-black font-pacifico my-3 mt-30">Your Shopping Cart</h2>
        <CartNav />
        <div className="cartItemsContainer bg-[#f7f7f7] text-black w-full min-h-20 h-auto p-4 rounded flex items-center flex-col justify-center gap-5">
      {!localStorage.getItem('items') >=1 ? <h4 className="font-pacifico">Cart Is Empty</h4> : '' }
          {combinedItems.map((item) => (
            <CartItems key={item.name} item={item} />
          ))}
        </div>
        <Checkout combinedItems={combinedItems} />
      </main>
    </section>
  );
};

export default Cart;

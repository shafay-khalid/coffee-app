import React from "react";
import CoffeeCarousel from "./CoffeeCarousel";
import Circle from "../components/UI/Circle";

const Shop = () => {
  return (
    <section className="min-h-screen pt-20 h-auto w-full bg-first-color">
      <main className="w-full">
        <div className="large-cicle bg-first-color-alt h-[800px] w-[800px] rounded-full absolute -top-8 -left-65 z-1"></div>
        <Circle top='top-[425px]' right='-left-[90px]' />

        <div className="bg-transparent min-h-screen text-second-color w-full">
          <h4 style={{fontSize: '24px'}} className="shop-heading font-pacifico absolute right-[10px] text-center z-1 top-[110px]">
            “What do you want? " <br /> "Just coffee. Black - like my soul.”
          </h4>
          <CoffeeCarousel />
        </div>
      </main>
    </section>
  );
};

export default Shop;

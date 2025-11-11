import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";

export const items = [
  {
    name: "Classic Coffee",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magni, dolor porro pariatur laborum natus expedita!",
    size: "100gm",
    price: 17.90,
    img: "/imgs/product-coffee-1.svg",
  },
  {
    name: "Black Coffee",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magni, dolor porro pariatur laborum natus expedita!",
    size: "100gm",
    price: 24.90,
    img: "/imgs/product-coffee-2.svg",
  },
  {
    name: "Strong Coffee",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magni, dolor porro pariatur laborum natus expedita!",
    size: "100gm",
    price: 32.90,
    img: "/imgs/product-coffee-3.svg",
  },
  {
    name: "expresso",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magni, dolor porro pariatur laborum natus expedita!",
    size: "200ml",
    price: 23.99,
    img: "/imgs/coffee1.svg",
  },
  {
    name: "caramel coffee",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magni, dolor porro pariatur laborum natus expedita!",
    size: "350ml",
    price: 21.99,
    img: "/imgs/coffee2.svg",
  },
  {
    name: "americano",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magni, dolor porro pariatur laborum natus expedita!",
    size: "200ml",
    price: 17.50,
    img: "/imgs/coffee3.svg",
  },
  {
    name: "fruit fresh",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magni, dolor porro pariatur laborum natus expedita!",
    size: "350ml",
    price: 15.99,
    img: "/imgs/coffee4.svg",
  },
  {
    name: "Lorem Ispum",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magni, dolor porro pariatur laborum natus expedita!",
    size: "350ml",
    price: 18.5,
    img: "/imgs/coffee5.png",
  },
  {
    name: "dolor sit",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magni, dolor porro pariatur laborum natus expedita!",
    size: "200ml",
    price: 19.99,
    img: "/imgs/coffee6.png",
  },
];

const getSlidesToShow = () => {
  const w = typeof window !== "undefined" ? window.innerWidth : 1920;
  if (w <= 900) return 1; // mobile & big phones
  if (w <= 1024) return 2; // small tablets
  if (w <= 1400) return 3; // laptops
  return 4; // desktops
};

const CoffeeCarousel = () => {
  const [count, setCount] = useState(getSlidesToShow());

  // Recalculate on resize/orientation change
  useEffect(() => {
    const onResize = () => setCount(getSlidesToShow());
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: count,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 1200,
        margin: "0 auto",
        padding: "140px 36px",
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Slider key={count} {...settings}>
        {items.map((item, i) => (
          <div key={i} className="px-2">
            {" "}
            {/* Tailwind spacing instead of fixed margin */}
            <div
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                minHeight: "200px",
                height: "350px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "contain",
                }}
              />
              <h5 className="text-first-color-alt font-medium m-[15px_0_10px] font-pacifico text-2xl" style={{fontSize: '23px'}}>
                {item.name}
              </h5>
              <p
                className="text-text-color"
                style={{ fontSize: "11px", textAlign: "center", flexGrow: 1 }}
              >
                {item.desc}
              </p>
              <div className="flex gap-5">
                <p className="text-text-color-light font-bold">{item.size}</p>
                <p className="text-text-color-light font-bold">${item.price}</p>
              </div>
              <NavLink to={`/shop/${item.name}`}>
                <button className="mt-[10px] py-[6px] px-[25px] bg-transparent text-black rounded-3xl cursor-pointer font-pacifico border-[2px] border-black font-light">
                  Buy now
                </button>
              </NavLink>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CoffeeCarousel;

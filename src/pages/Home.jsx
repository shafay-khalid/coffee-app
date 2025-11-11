import React, { useState } from "react";
import Button1 from "../components/UI/Button1";
import ProductBox from "../components/UI/ProductBox";

const Home = () => {
  const [animation, setAnimation] = useState(0);
  addEventListener("scroll", () => {
    if (window.scrollY) {
      setAnimation(window.scrollY);
    }
  });

  return (
    <>
      <main className="linear w-full flex items-center justify-center h-auto min-h-screen pb-20 mt-20">
        <div className="container-home flex items-center h-full p-10 gap-10">
          <div className="main-left cursor-pointer flex items-center w-[50%]">
            <img
              className="h-[80%]"
              src="/imgs/home-coffee.svg"
              alt="home-coffee"
            />
          </div>
          <div className="main-right w-[50%] flex flex-col">
            <h6 className="font-medium cursor-pointer text-second-color">
              EXCEPTIONAL QUALITY
            </h6>
            <div className="home-title cursor-pointer flex flex-column">
              <h1 className="font-pacifico">
                It's time for a <br />
                good coffee
              </h1>
              <img
                className="coffee-bean-img absolute top-[38%] w-[10vw] right-[8%] max-w-[140px]"
                src="/imgs/home-coffee-title1.svg"
                alt="home-coffee"
              />
            </div>
            <h6 className="h-para my-6 w-[400px]">
              Each select coffee bean reflects our commitment to Peruvian coffee
              growers, who bring the best select coffee to your table.
            </h6>
            <Button1 bgY="second-color" />
          </div>
        </div>
      </main>
      <section className="about bg-first-color h-auto min-h-screen w-full p-20 flex items-center justify-center rounded-t-[70px] -mt-[60px]">
        <div className="container-about flex items-center gap-10">
          <div className={`box-left flex flex-col gap-5`}>
            <Button1 animateIt={true} animation={animation} />
            <h6
              className={`max-w-[400px] ${
                animation > 400 ? `animate-productMove` : ""
              }`}
            >
              We strive to form deep partnerships with farmers from all over the
              world to create perspective together and form healthy working
              relationships built on trust and respect.
            </h6>
          </div>
          <div className="box-right flex items-center justify-center gap-15">
            <ProductBox animation={animation} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

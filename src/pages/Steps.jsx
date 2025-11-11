import React from "react";
import NumberBox from "../components/UI/NumberBox";
import StepsBox from "../components/UI/StepsBox";

const Steps = () => {
  const stepsData = [
    {
      img: "steps-green-coffee.svg",
      para: "Harvest occurs annually when the coffee beans reach maturity and are collected for processing.",
    },
    {
      img: "steps-coffee-beans.svg",
      para: "The beans are dried using a wet or dry technique, depending on the taste we want to obtain.",
    },
    {
      img: "steps-ground-coffee.svg",
      para: "The coffee is roasted and acquires its flavor by processing the grain in ovens.",
    },
  ];

  return (
    <section className="steps-page h-auto min-h-screen w-full bg-first-color flex flex-col items-center justify-center gap-25 px-15 pt-40 pb-40">
      <h3 className="steps-heading font-pacifico">
        Steps of manufacturing our products
      </h3>
      <main className="steps-main flex items-center justify-center gap-20 w-full">
        <img
          className="steps-dashed-line absolute -z-0"
          src="/imgs/steps-line-dashed.svg"
          alt="steps-line-dashed.svg"
        />
        {stepsData.map((val, idx) => {
          return <StepsBox key={val.img} val={val} idx={idx} />;
        })}
      </main>
    </section>
  );
};

export default Steps;

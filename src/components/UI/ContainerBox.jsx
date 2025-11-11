import React from "react";

const ContainerBox = ({ about }) => {
  return (
    <section className="bg-first-color pt-20 w-full min-h-screen h-auto">
      <main className="bg-white-color rounded-t-[70px] mt-1 w-full min-h-screen h-auto flex items-center justify-center pt-10 pb-25">
        <div
          className={`about-us-container flex items-center ${
            about ? "flex-row" : "flex-row-reverse"
          } gap-25 p-25`}
        >
          <div className="about-us-left w-1/2">
            <img
              className="w-full"
              src={about ? '/imgs/about-coffee.svg' : '/imgs/testimonial-coffee.svg'}
              alt={about ? 'about-coffee' : 'testimonial-coffee'}
            />
          </div>
          <div className="about-us-right flex flex-col w-1/2 text-black gap-4">
            <h2 className="font-pacifico">
              {about
                ? "Our History"
                : "Coffee is the best drink in the morning, it keeps you focused."}
            </h2>
            <h6 className="text-text-color">
              {about
                ? "We make and grow the best coffee in Peru, accompanying families since 1930, with professional workers who harvest, collect and select the coffee with quality work, thus providing exquisite coffee to enjoy together as a family."
                : "Jhon Doe"}
            </h6>
          </div>
        </div>
      </main>
    </section>
  );
};

export default ContainerBox;

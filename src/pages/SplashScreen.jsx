import React from "react";

const SplashScreen = () => {

  return (
    <div
      className={`splash-screen flex items-center justify-center h-screen w-screen bg-first-color gap-3 transition-transform duration-700`}
    >
      <img
        className={`w-25`}
        src="/imgs/logo.svg"
        alt="logo"
      />
      <h1 style={{ fontSize: "44px" }} className="text-white font-pacifico">
        Cofetto
      </h1>
    </div>
  );
};

export default SplashScreen;

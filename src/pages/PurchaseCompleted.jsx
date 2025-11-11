import React, { useEffect, useState } from "react";
import { MdVerified } from "react-icons/md";
import HomeButton from "../components/UI/HomeButton";
import Loader from "./Loader";
import { Navigate } from "react-router-dom";

const PurchaseCompleted = () => {
  const [loadingCond, setLoadingCond] = useState(true);
  const [goBack, setGoBack] = useState();
  const [number, setNumber] = useState(10);

  useEffect(() => {
    setNumber(10)
    setLoadingCond(true);
    const timer = setTimeout(() => {
      setLoadingCond(false);
      localStorage.clear();
    }, 2000);

    setGoBack(true);
    const timer2 = setTimeout(() => {
      setGoBack(false);
    }, 10000);

    return () => clearTimeout(timer, timer2);
  }, []);

  setInterval(() => {
    setNumber(number - 1);
  }, 1000);

  return (
    <>
      {loadingCond && <Loader />}
      <section className="purchase-completed min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-white to-gray-100 ">
        {!loadingCond && (
          <main className="w-full h-full flex items-center justify-center flex-col gap-6">
            {/* Success Icon */}
            <MdVerified className="text-green-600 text-[200px] animate-pop-spin" />

            {/* Text */}
            <h3 className="font-pacifico text-green-600 text-3xl animate-fade-up">
              Payment Success
            </h3>
            <p className="text-black">Going Back In {number}</p>

            {/* Button */}
            <div className="animate-fade-up w-1/2 delay-300">
              <HomeButton path={"/"} color={"bg-green-600"} />
            </div>
            {!goBack && <Navigate to={"/"} />}
          </main>
        )}
      </section>
    </>
  );
};

export default PurchaseCompleted;

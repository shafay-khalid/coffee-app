import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { items } from "./CoffeeCarousel";
import Loader from "./Loader";
import ToastButton from "../components/UI/ToastButton";
import ToastMessage from "../components/UI/ToastMessage";
import HomeButton from "../components/UI/HomeButton";

const ProductPage = () => {
  const [toastCondition, setToastCondition] = useState(false);

  const showToast = () => {
    if (!toastCondition) {
      const existing = JSON.parse(localStorage.getItem("items")) || [];
      const updated = [...existing, data];
      localStorage.setItem("items", JSON.stringify(updated));

      console.log(updated);

      setToastCondition(true);
    } else {
      setToastCondition(false);
    }
  };

  const [condition, setCondition] = useState(false);
  const [data, setData] = useState();
  const param = useParams();

  useEffect(() => {
    setData(items.find((item) => item.name.toString() === param.id));
  }, []);

  setTimeout(() => {
    setCondition(true);
  }, 2000);

  return (
    <>
      {!condition ? (
        <Loader />
      ) : (
        <section className="bg-first-color pt-20 w-full min-h-screen h-auto">
          <main className="bg-white-color rounded-t-[70px] mt-1 w-full min-h-screen h-auto flex items-center justify-center pt-10 pb-25">
            <div
              className={`Product-Page-container flex items-center 
            "flex-row" gap-25 p-25`}
            >
              <div className="Product-Page-left w-1/2">
                <div className="item-box bg-[#fff] flex items-center justify-center rounded-4xl">
                  <img
                    className="w-[60%]"
                    src={data.img}
                    alt={"about-coffee"}
                  />
                </div>
              </div>
              <div className="Product-Page-right flex flex-col w-1/2 text-black gap-4">
                <h2 className="font-pacifico">{data.name}</h2>
                <h6 className="text-text-color">{data.desc}</h6>
                <div className="row-b flex items-center gap-[120px] w-full">
                  <ToastButton showToast={showToast} />
                  <p style={{ fontSize: "17px" }} className="font-bold">
                    ${data.price}
                  </p>
                  {toastCondition ? <ToastMessage /> : ""}
                </div>
                  <HomeButton path={'/shop'} color={'bg-first-color-alt'}/>
              </div>
            </div>
          </main>
        </section>
      )}
    </>
  );
};

export default ProductPage;

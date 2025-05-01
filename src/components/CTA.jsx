import React from "react";
import CTA_bg from "../assets/BG_image.png";
import DonateButton from "./DonateButton";

const CTA = () => {
  return (
    <div className="cta_container flex justify-center h-[70vh]  items-center">
      {" "}
      <div
        className=" relative bg-cover bg-center w-7/8 md:w-3/4 h-[50vh] rounded-xl flex-col content-center items-center text-center m-auto"
        style={{
          backgroundImage: `url(${CTA_bg})`,
        }}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 p-3 ">
          Be the reason someone smiles today
        </h2>
        <DonateButton />
      </div>
    </div>
  );
};

export default CTA;

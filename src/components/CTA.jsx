import React from "react";
import CTA_bg from "/cta_bg_1.webp";
import DonateButton from "./DonateButton";
import { Handshake } from "lucide-react";

const CTA = () => {
  return (
    <div className="cta_container px-5 flex  justify-center h-[70vh]  items-center">
      {" "}
      <div
        className=" relative bg-cover bg-center w-7/8 md:w-3/4 h-[50vh] rounded-xl flex-col content-center items-center text-center m-auto"
        style={{
          backgroundImage: `url(${CTA_bg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/10 z-0 rounded-xl"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 p-3 ">
            Be the reason someone smiles today
          </h2>
          <div className="inline-flex flex-col md:flex-row gap-x-5 gap-y-5 justify-center">
            {" "}
            <DonateButton />
            <a
              href="#contact"
              className="relative z-10 inline-flex items-center justify-center overflow-hidden text-white bg-gradient-to-br from-darkblue to-blue-500 rounded-full px-8 py-3 font-semibold shadow-lg hover:bg-white transition-all duration-300"
            >
              <Handshake className="mr-2 w-4 h-4" />
              Collaborate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;

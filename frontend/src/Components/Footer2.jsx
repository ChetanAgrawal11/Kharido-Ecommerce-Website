import React from "react";
import payments from "../Assets/payments.png"

const Footer2 = () => {
  return <>
  <div className="con1 flex justify-around px-2 pt-1 h-8 w-full bg-cyan-950 rounded-b-md">
    <div className="sec1 text-gray-300 flex ">
  @2024 Kharido,Inc
    </div>
   <img src={payments} className="h-4 flex mt-1 w-[230px]"></img>
    <div className="sec3 text-gray-300">
    Scroll to Top 
    </div>
  </div>
  </>;
};

export default Footer2;

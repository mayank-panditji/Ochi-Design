import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen bg-[#202324] px-32 flex items-center gap-5">
      <div className="cardcontainer h-[50vh]  w-1/2 ">
        <div className="card w-full h-full  rounded-xl bg-[#003E36] flex items-center justify-center relative">
            <img className="w-32" src="/img/logo001.svg" alt="" />
            <button className="absolute px-5 py-1 rounded-full border-2  border-[#14472D] left-10 bottom-10 text-[#93e232]">&copy;2019-2022</button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5  w-1/2 h-[50vh]">
        <div className=" relative flex items-center justify-center card w-1/2 h-full  rounded-xl bg-[#191B1C]">
        <img className="w-32" src="/img/logo003.svg" alt="" />
        <button className="absolute px-5 py-1 rounded-full border-2  border-[#202324] left-10 bottom-10 text-[#eeeae3] hover:bg-[#222525]">RATING 5.0 ON CLUTCH</button>
        </div>
        <div className="relative flex items-center justify-center card w-1/2 h-full rounded-xl  bg-[#191B1C]">
        <img className="w-32 mb-10" src="/img/logo004.png" alt="" />
        <button className="absolute px-5 py-1 rounded-full border-2  border-[#202324] left-10 bottom-10 text-[#eeeae3] text-nowrap hover:bg-[#222525] ">BUSINESS BOOTCAMP </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

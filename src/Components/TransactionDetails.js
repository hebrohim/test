import React from "react";
import chip from "../assets/chip.png";
import wifi from "../assets/wifi.png";
import masterCard from "../assets/mastercard-2.svg";
const TransactionDetails = () => {
  return (
    <div className="mt-40 md:w-[30vw]">
      <div className="bg-slate-200 rounded-2xl  flex flex-col justify-center px-8">
        <div className="w-[70vw] bg-gray-100 rounded-2xl px-5 mx-auto py-10 -translate-y-24 md:w-[20vw]">
          <div className="flex justify-between">
            <img src={chip} style={{ width: "2rem", height: "3rem" }} />
            <img src={wifi} style={{ width: "2rem", height: "2rem" }} />
          </div>
          <div className="mt-32">
            <h2>Jonathan Michael</h2>

            <h2 className="font-bold">.... 3456</h2>
          </div>

          <div className="flex justify-between mt-20">
            <h2 className="font-bold">09/22</h2>

     
              <img src={masterCard} style={{ width: "2rem", height: "2rem" }}/>
            
          </div>
        </div>
        
      <div className=" mx-5 translate-y-[-5rem]">
       <div className="flex justify-between">
        <p className="opacity-[.5]">company</p>
        <div className="font-bold">Apple</div>
        </div>
        <div className="flex justify-between">
        <p className="opacity-[.5]">Order Number</p>
        <div className="font-bold">1266201</div>
        </div>   <div className="flex justify-between">
        <p className="opacity-[.5]">product</p>
        <div className="font-bold">MackBook Air</div>
        </div>   <div className="flex justify-between">
        <p className="opacity-[.5]">VAT(20%)</p>
        <div className="font-bold">$100.00</div>
        </div>
      </div>
      </div>

    </div>
  );
};

export default TransactionDetails;

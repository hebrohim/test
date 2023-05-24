import React from 'react'
import dotsImg from "../assets/dots.svg";

const CVV = () => {
  return (
    <div className="cvv">
    <div>
      <h3 className="text-sm font-bold">CVV Number</h3>
      <p className="text-xs text-slate-400">
        Enter the 3 or 4 digit number on the card
      </p>
    </div>

    <div className="border-2 w-full flex justify-between p-2 rounded-md my-5">
      <input
        className="w-full outline-none text-center"
        placeholder="327"
      />
      <img
        src={dotsImg}
        style={{ width: "1.2rem", marginRight: ".5rem" }}
        className="opacity-[0.09]"
      />
    </div>
  </div>

  )
}

export default CVV
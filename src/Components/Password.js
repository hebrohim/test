import React from 'react'
import dotsImg from "../assets/dots.svg";

const Password = () => {
  return (
    <div className="Password md:w-[50vw]">
    <div>
      <h3 className="text-sm font-bold">Password</h3>
      <p className="text-xs text-slate-400">
        Enter your Dynamic password
      </p>
    </div>

    <div className="border-2 w-full flex justify-between p-2 rounded-md my-5 font-bold">
      <input
      type='password'
        className="w-full outline-none text-center"
        placeholder="........"
        
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

export default Password
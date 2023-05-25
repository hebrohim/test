import React from 'react'

const ExpiryDate = () => {
  return (
    <div className="ExpiryDate md:w-[50vw]">
    <div>
      <h3 className="text-sm font-bold">Expiry Date</h3>
      <p className="text-xs text-slate-400">
        Enter the expiration date of the card
      </p>
    </div>

    <div className=" w-full flex items-center justify-between p-2 rounded-md my-5">
      <input
        className="w-[40%] p-2 rounded-md border-2 outline-none text-center"
        placeholder="09"
      />
      /
      <input
        className="w-[40%] p-2 rounded-md border-2 outline-none text-center"
        placeholder="22"
      />
    </div>
  </div>
  )
}

export default ExpiryDate
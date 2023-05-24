import React from 'react'
import { HiPencil } from "react-icons/hi";

const CardNumber = () => {
  return (
    <div className="cardNumber flex items-center justify-between text-slate-900">
    <div>
      <h3 className="text-sm font-bold">Card Number</h3>
      <p className="text-xs text-slate-400">
        Enter the 16-digit card number on the card
      </p>
    </div>

    <div className="flex items-center text-sky-600">
      <HiPencil />
      <span className="pl-1">Edit</span>
    </div>
  </div>
  )
}

export default CardNumber
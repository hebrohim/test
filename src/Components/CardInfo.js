import React from "react";
import verifiedIcon from "../assets/verified-badge.svg";
import mcSymbol from "../assets/mc_symbol.svg";
import CVV from "./CVV";
import ExpiryDate from "./ExpiryDate";
import Password from "./Password";
import CardNumber from "./CardNumber";
import Button from "./Button";
const CardInfo = () => {
  return (
    <section>
   
<CardNumber/>
      <div className="border-2 w-full flex justify-between p-2 rounded-md my-5">
        <img src={mcSymbol} alt="masterCard" style={{ width: "1.6rem", marginRight: ".5rem" }} />
        <input
          className="w-full outline-none"
          placeholder="2412 - 7512 - 3412 - 3456"
        />
        <img
          src={verifiedIcon}
          style={{ width: "1.2rem", marginRight: ".5rem" }}
          alt="verified"
        />
      </div>

   <CVV/>
  <ExpiryDate/>
  <Password/>
  <Button/>
    </section>
  );
};

export default CardInfo;

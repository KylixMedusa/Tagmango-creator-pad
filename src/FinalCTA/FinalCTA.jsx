import React from "react";
import { PopupButton } from "@typeform/embed-react";
import "./FinalCTA.css";

const Finalcta = () => {
  return (
    <div className="finalcta--container">
      <div className="finalcta--wrapper">
        <h2>The Pad is YOUR HOME. Looking forward to your visit! </h2>
        <p>Get us some mangoes - we LOVE them 😜</p>
        <PopupButton id="NFK7B7tn" className="finatBtn">
          Book your slot NOW!
        </PopupButton>
        <span>P.S. With the Covid restrictions in place, the pad is open with a limited capacity for now. Book your slots in the form above and we’ll get in touch with you.</span>
      </div>
    </div>
  );
};

export default Finalcta;

import React from "react";

export default function Team() {
  return (
    <div className="container">
      <div className="row p-5">
        <h2 className="text-center mb-5">People</h2>
        <div className="col-5 p-5 d-flex flex-column gap-3 align-items-center">
          <img src="assets/Photo.png" style={{borderRadius:"50%" ,width : "60%"}} />
          <h4>Prakhar Singh</h4>
          <p>Software Developer</p>
        </div>
        <div className="col-7 p-5 d-flex flex-column gap-3">
            <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
            <p>Playing basketball is his zen.</p>
            <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function OpenAccount() {
  let openAccount = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col gap-3 p-5" style={openAccount}>
          <h1>Open a Zerodha account</h1>
          <p>
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <button className="btn btn-primary p-2 px-5 fs-5">Signup for free</button>
        </div>
      </div>
    </div>
  );
}

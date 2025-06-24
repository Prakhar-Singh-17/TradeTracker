import React from "react";

export default function Hero() {
  let imageSize = {
    width: "50%",
  };
  return (
    <div className="container px-5 mt-5">
      <div className="mb-5 text-center">
        <h1>Charges</h1>
        <h4 className="text-secondary">List of all charges and taxes</h4>
      </div>
      <div className="row p-5 text-center">
        <div className="col p-5">
          <img src="assets/pricing0.svg" style={imageSize} />
          <h2>Free equity delivery</h2>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col p-5">
          <img src="assets/intradayTrades.svg" style={imageSize} />
          <h2>Intraday and F&O trades </h2>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades
          </p>
        </div>
        <div className="col p-5">
          <img src="assets/pricing0.svg" style={imageSize} />
          <h2>Free direct MF</h2>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

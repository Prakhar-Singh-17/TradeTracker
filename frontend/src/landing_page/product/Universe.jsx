import React from "react";

export default function Universe() {
  let imageSize = { width: "50%" };

  return (
    <div className="container p-5" style={{fontSize : "70%"}}>
      <div className="text-center d-flex flex-column gap-5">
        <h3 className="mb-5">
          Want to know more about our technology stack? Check out the
          Zerodha.tech blog.
        </h3>
        <span className="mb-5">
        <h2>The Zerodha Universe</h2>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        </span>
      </div>

      <div className="row d-flex justify-content-center">
        <div className="col-6 col-md-4 p-5 d-flex flex-column justify-content-between align-items-center text-center">
          <img
            src="assets/zerodhaFundhouse.png"
            style={imageSize}
            className="img-fluid"
          />
          <p>
            Our asset management venture that is creating simple and transparent
            index funcs to help you save for your goals
          </p>

          <img
            src="assets/streakLogo.png"
            style={imageSize}
            className="img-fluid"
          />
          <p>
            Systematic trading platform that allows you to create and backtest
            startegies without coding.
          </p>
        </div>
        <div className="col-6 col-md-4 p-5 d-flex flex-column justify-content-between align-items-center text-center">
          <img
            src="assets/sensibullLogo.svg"
            style={imageSize}
            className="img-fluid"
          />
          <p>
            Options trading platform that lets you create strategies , analyze
            positions and examine data points like open interest , FII/DII and
            more.
          </p>

          <img
            src="assets/smallcaseLogo.png"
            style={imageSize}
            className="img-fluid"
          />
          <p>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-6 col-md-4 p-5 d-flex flex-column justify-content-between align-items-center text-center">
          <img
            src="assets/goldenpiLogo.png"
            style={imageSize}
            className="img-fluid"
          />
          <p>
            Investment research platform that offers detailed insights on stocks
            , sectors , supply chains and more.
          </p>

          <img
            src="assets/dittoLogo.png"
            style={imageSize}
            className="img-fluid"
          />
          <p>
            Personalized advice on life and health insurance. No spam and no
            mis-selling
          </p>
        </div>
      </div>
      <div className="text-center">
      <button className="btn btn-primary p-2 px-5 fs-5">Signup for free</button>
      </div>
    </div>
  );
}

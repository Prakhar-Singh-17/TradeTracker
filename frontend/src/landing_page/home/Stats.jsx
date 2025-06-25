import React from "react";

export default function Stats() {
  return (
    <div className="container  mb-5">
      <div className="row">
        <div className="col p-5" style={{display:"flex" , flexDirection :"column" , justifyContent:"space-between"}}>
          <h3>Trust with confidence</h3>
          <div>
            <h5>Customer-first always</h5>
            <p>
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments and contribute to 15% of daily retail
              exchange volumes in India.
            </p>
          </div>
          <div>
            <h5>No spam or gimmicks</h5>
            <p>
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like. Our
              philosophies.
            </p>
          </div>
          <div>
            <h5>The Zerodha universe</h5>
            <p>
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>
          <div>
            <h5>Do better with money</h5>
            <p>
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>
        <div className="col p-5">
          <div className="row">
            <img src="assets/ecosystem.png" className="img-fluid" />
          </div>
          <div className="row">
            <div className="col text-center">
              <a className="ui-links">Explore our products <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className="col text-center">
              <a className="ui-links">Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

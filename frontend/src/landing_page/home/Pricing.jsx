export default function Pricing() {
  let centerPricing = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };

  let pricingText = {
    fontSize : "10px",
  }

  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-5 p-5">
          <h1 className="mb-4">Unbeatable pricing</h1>
          <p className="mb-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a>
            See pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-7 p-5 d-flex align-items-center">
          <div className="row ">
            <div className="col" style={centerPricing}>
              <img src="assets/pricing0.svg" className="img-fluid" style={{width : "55%"}}/>
              <p style={pricingText}>Free account opening</p>
            </div>
            <div className="col" style={centerPricing}>
              <img src="assets/pricing0.svg" className="img-fluid" style={{width : "55%"}}/>
              <p  style={pricingText}>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col" style={centerPricing}>
              <img src="assets/intradayTrades.svg" className="img-fluid" style={{width : "55%"}}/>
              <p  style={pricingText}>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

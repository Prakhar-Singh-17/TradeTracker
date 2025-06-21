export default function Education() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col p-5">
          <img src="assets/education.svg" className="img-fluid" />
        </div>
        <div
          className="col p-5"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <h1>Free and open market education</h1>
          <span>
            <p>
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a>
              Varsity <i class="fa-solid fa-arrow-right"></i>
            </a>
          </span>
          <span>
            <p>
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a>
              TradingQ&A <i class="fa-solid fa-arrow-right"></i>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Awards() {
  return (
    <div className="container mb-5">
      <div className="row ">
        <div className="col-6  p-5">
          <img src="assets/largestBroker.svg" />
        </div>
        <div className="col-6 p-5" style={{display:"flex" , flexDirection : "column", justifyContent:"space-between"}}>
          <span>
  <h1>Largest stock broker in India</h1>
          <p>
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in :
          </p>
          </span>
          <div className="row">
            <div className="col">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>
                  <p>Stocks and IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Government securities</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
             <img src="assets/pressLogos.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

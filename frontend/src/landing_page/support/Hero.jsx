import React from "react";

export default function Hero() {
  let supportSection = { backgroundColor: "#387ed1", color: "white" , marginBottom : "50px"};
  return (
    <div style={supportSection}>
      <div className="container p-5">
        <div className="row px-5 p-2">
          <div className="col">
            <h3>Support Portal</h3>
          </div>
          <div className="col text-end">
            <a className="text-white">Track Tickets</a>
          </div>
        </div>
        <div className="row p-3">
          <div className="col px-5">
            <h3>
              Search for an answer or browse help topics to create a ticket
            </h3>
            <input
              type="text"
              placeholder="Eg. how do i activate F&O?"
              style={{ width: "100%", padding: "15px" }}
            />
            <div className="links d-flex flex-wrap gap-4 mt-5">
              <a className="text-white">Track account opening</a>
              <a className="text-white">Track segment activation</a>
              <a className="text-white">Intraday margins</a>
              <a className="text-white">Kite user manual</a>
            </div>
          </div>
          <div className="col px-5 d-flex flex-column gap-3">
            <h4>Featured</h4>
            <p>
              1. &nbsp;
              <a className="text-white">
                Surveillance measure on scrips - June 2025
              </a>
            </p>
            <p>
              2. &nbsp;
              <a className="text-white">
                Rights Entitlements listing in June 2025
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

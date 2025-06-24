import React from "react";

export default function Ticket() {
  return (
    <div className="container px-5">
      <h4 className="text-secondary px-4">
        To create a ticket, select a relevant topic
      </h4>
      <div className="row">
        <div className="col p-5">
          <div className="d-flex align-items-center mb-4">
            <i class="fa-solid fa-plus"></i>
            <h5 className="mb-0">&nbsp; Account Opening</h5>
          </div>
          <div className="d-flex flex-column gap-3 ps-4">
            <a>Resident individual</a>
            <a>Minor</a>
            <a>Non Resident Indian (NRI)</a>
            <a>Company, Partnership, HUF and LLP</a>
            <a>Glossary</a>
          </div>
        </div>
        <div className="col p-5">
          <div className="d-flex align-items-center mb-4">
            <i class="fa-solid fa-user"></i>
            <h5 className="mb-0">&nbsp; Your Zerodha Account</h5>
          </div>
          <div className="d-flex flex-column gap-3 ps-4">
            <a>Your Profile</a>
            <a>Account modification</a>
            <a>Client Master Report (CMR) and Depository Participant (DP)</a>
            <a>Nomination</a>
            <a>Transfer and conversion of securities</a>
          </div>
        </div>
        <div className="col p-5">
          <div className="d-flex align-items-center mb-4">
            <i class="fa-solid fa-chart-simple"></i>
            <h5 className="mb-0">&nbsp; Kite</h5>
          </div>
          <div className="d-flex flex-column gap-3 ps-4">
            <a>IPO</a>
            <a>Trading FAQs</a>
            <a>Margin Trading Facility (MTF) and Margins</a>
            <a>Charts and orders</a>
            <a>Alerts and Nudges</a>
            <a>General</a>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col p-5">
          <div className="d-flex align-items-center mb-4">
            <i class="fa-solid fa-wallet"></i>
            <h5 className="mb-0">&nbsp; Funds</h5>
          </div>
          <div className="d-flex flex-column gap-3 ps-4">
            <a>Add money</a>
            <a>Withdraw money</a>
            <a>Add bank accounts</a>
            <a>eMandates</a>
          </div>
        </div>
        <div className="col p-5">
          <div className="d-flex align-items-center mb-4">
            <i class="fa-solid fa-terminal"></i>
            <h5 className="mb-0">&nbsp; Console</h5>
          </div>
          <div className="d-flex flex-column gap-3 ps-4">
            <a>Portfolio</a>
            <a>Corporate actions</a>
            <a>Funds statement</a>
            <a>Reports</a>
            <a>Profile</a>
            <a>Segments</a>
          </div>
        </div>
        <div className="col p-5">
          <div className="d-flex align-items-center mb-4">
            <i class="fa-solid fa-coins"></i>
            <h5 className="mb-0">&nbsp; Coin</h5>
          </div>
          <div className="d-flex flex-column gap-3 ps-4">
            <a>Mutual funds</a>
            <a>National Pension Scheme (NPS)</a>
            <a>Features on Coin</a>
            <a>Payments and Orders</a>
            <a>General</a>
          </div>
        </div>
      </div>
    </div>
  );
}

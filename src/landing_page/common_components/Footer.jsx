import React from "react";

export default function Footer() {
  let footerText= {fontSize : "12px"};
  let footerExtra ={fontSize : "10px" ,wordSpacing: "0.25rem"}
    return (
    <footer className=" mt-5 bg-light" style={footerText}>
      <div className="container px-5 pt-5">
        <div className="row">
          <div className="col p-5 d-flex flex-column gap-3">
            <img src="assets/logo.svg" width={"60%"}></img>
            <p>© 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
            <div className="d-flex gap-3 fs-5">
              <i class="fa-brands fa-x-twitter"></i>
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-linkedin-in"></i>
            </div>
            <hr></hr>
            <div className="d-flex gap-3 fs-5">
              <i class="fa-brands fa-youtube"></i>
              <i class="fa-brands fa-whatsapp"></i>
              <i class="fa-brands fa-telegram"></i>
            </div>
          </div>
          <div className="col p-5 d-flex flex-column gap-3">
            <h4>Account</h4>
            <a className="footer-link">Open demat account</a>
            <a className="footer-link">Minor demat account</a>
            <a className="footer-link">NRI demat account</a>
            <a className="footer-link">Commodity</a>
            <a className="footer-link">Dematerialisation</a>
            <a className="footer-link">Fund transfer</a>
            <a className="footer-link">MTF</a>
            <a className="footer-link">Referral program</a>
          </div>
          <div className="col p-5 d-flex flex-column gap-3">
            <h4>Support</h4>
            <a className="footer-link">Contact us</a>
            <a className="footer-link">Support portal</a>
            <a className="footer-link">How to file a complaint?</a>
            <a className="footer-link">Status of your complaints</a>
            <a className="footer-link">Bulletin</a>
            <a className="footer-link">Circular</a>
            <a className="footer-link">Z-Connect blog</a>
            <a className="footer-link">Downloads</a>
          </div>
          <div className="col p-5 d-flex flex-column gap-3">
            <h4>Company</h4>
            <a className="footer-link">About</a>
            <a className="footer-link">Philosophy</a>
            <a className="footer-link">Press & media</a>
            <a className="footer-link">Careers</a>
            <a className="footer-link">Zerodha Cares (CSR)</a>
            <a className="footer-link">Zerodha.tech</a>
            <a className="footer-link">Open source</a>
          </div>
          <div className="col p-5 d-flex flex-column gap-3">
            <h4>Quick links</h4>
            <a className="footer-link">Upcoming IPOs</a>
            <a className="footer-link">Brokerage charges</a>
            <a className="footer-link">Market holidays</a>
            <a className="footer-link">Economic calendar</a>
            <a className="footer-link">Calculators</a>
            <a className="footer-link">Markets</a>
            <a className="footer-link">Sectors</a>
          </div>
        </div>
        <div className="row" style={footerExtra}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@zerodha.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
          </p>
          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>
          <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
        <p>
          Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
        </p>
        <p>
          "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
        </p>
        </div>
      </div>
    </footer>
  );
}

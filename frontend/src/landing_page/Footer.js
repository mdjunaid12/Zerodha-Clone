import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(240,240,240)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img
              src="media/images/logo.svg"
              alt="Logo"
              style={{ width: "50%" }}
            />
            <p>© 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.</p>
          </div>

          <div className="col">
            <p>Company</p>
            {[
              "About",
              "Products",
              "Pricing",
              "Referral programme",
              "Careers",
              "Zerodha.tech",
              "Press & media",
              "Zerodha cares (CSR)",
            ].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="text-muted d-block"
                style={{ textDecoration: "none", marginBottom: "4px" }}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="col">
            <p>Support</p>
            {[
              "Support portal",
              "Z-Connect blog",
              "List of charges",
              "Downloads & resources",
            ].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="text-muted d-block"
                style={{ textDecoration: "none", marginBottom: "4px" }}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="col">
            <p>Account</p>
            {["Open an account", "Fund transfer", "60 day challenge"].map(
              (item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-muted d-block"
                  style={{ textDecoration: "none", marginBottom: "4px" }}
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>

        <div className="mt-5 text-muted" style={{ fontSize: "15px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading
          through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI
          Registration no.: INZ000038238 Registered Address: Zerodha Broking
          Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
          School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
          any complaints pertaining to securities broking please write to
          complaints@zerodha.com, for DP related to dp@zerodha.com.Please
          ensure you carefully read the Risk Disclosure Document as prescribed
          by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances
          </p>
          <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
          <p>
            Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
          </p>
        </div>
      </div>

      {/* Full-width footer bar */}
      <div className="w-100 text-center py-3" style={{ backgroundColor: "rgb(240,240,240)" }}>
        <ul className="list-inline mb-0">
          {[
            { name: "NSE", url: "https://nseindia.com" },
            { name: "BSE", url: "https://www.bseindia.com/" },
            { name: "MCX", url: "https://www.mcxindia.com/" },
            { name: "Terms & conditions", url: "https://zerodha.com/terms-and-conditions/" },
            { name: "Policies & procedures", url: "https://zerodha.com/policies-and-procedures/" },
            { name: "Privacy policy", url: "https://zerodha.com/privacy-policy/" },
            { name: "Disclosure", url: "https://zerodha.com/disclosure/" },
            { name: "For investor's attention", url: "https://zerodha.com/investor-attention/" },
            { name: "Investor charter", url: "https://zerodha.com/tos/investor-charter/" },
          ].map((link, index) => (
            <li key={index} className="list-inline-item mx-2">
              <a
                href={link.url}
                rel="nofollow"
                target="_blank"
                className="text-muted text-decoration-none"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

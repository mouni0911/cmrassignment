import React from "react";
import { Link } from "react-router-dom";
import { NavItem } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="footer-content col-3">
            <p style={{ color: "black" }}>
              &copy; {new Date().getFullYear()} Your Company Name
            </p>
            <NavItem>
              {" "}
              <ul className="homefooter">
                <li>
                  <Link to="/" id="foot">
                    {" "}
                    Home{" "}
                  </Link>
                </li>

                <li>
                  <Link to="/about" id="foot">
                    {" "}
                    About{" "}
                  </Link>
                </li>

                <li>
                  <Link to="/services" id="foot">
                    {" "}
                    Services{" "}
                  </Link>
                </li>

                <li>
                  <Link to="/contact" id="foot">
                    {" "}
                    Contact{" "}
                  </Link>
                </li>
              </ul>
            </NavItem>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

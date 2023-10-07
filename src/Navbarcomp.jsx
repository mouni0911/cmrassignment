import React from "react";
import { Link } from "react-router-dom";
import "./Navbarcomp.css";
import { NavItem, Button } from "react-bootstrap";

const NavbarComp = () => {
  return (
    <NavItem className="bgcolor navbar navbar-expand-lg">
      <ul className=" navbar-nav me-auto mb-2 mb-lg-0  container-fluid ulcontainer">
        <li
          style={{
            fontSize: "24px",
            background: "-webkit-linear-gradient(#eee, #333)",
            webkitBackgroundClip: "text",
            webkitTextFillColor: " transparent",
          }}
        >
          Livespace
        </li>
        <li>
          <Link to="/" className="linkdeco">
            {" "}
            Home{" "}
          </Link>
        </li>

        <li>
          <Link to="/about" className="linkdeco">
            {" "}
            About{" "}
          </Link>
        </li>

        <li>
          <Link to="/services" className="linkdeco">
            {" "}
            Services{" "}
          </Link>
        </li>
        <li>
          <Link to="/pagination" className="linkdeco">
            {" "}
            Paginationdata{" "}
          </Link>
        </li>

        <li>
          <Link to="/contact" className="linkdeco">
            {" "}
            Contact{" "}
          </Link>
        </li>

        <Button className="btn" variant="warning" size="sm">
          <Link to="/Signup" style={{ textDecoration: "none" }}>
            Sign up
          </Link>
        </Button>
      </ul>
    </NavItem>
  );
};

export default NavbarComp;

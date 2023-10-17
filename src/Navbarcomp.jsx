import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./Navbarcomp.css";

const NavbarComp = () => {
  return (
    <Navbar bg="gray" expand="lg" className="navbar ">
      <Navbar.Brand className="navbar-brand">
        <Link to="/" className="linkdeco">
          Livespace
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto ">
          <div className="nav-links-container">
            <Link to="/" className="nav-link links" style={{ color: "white" }}>
              Home
            </Link>
            <Link
              to="/about"
              className="nav-link links"
              style={{ color: "white" }}
            >
              About
            </Link>
            <Link
              to="/services"
              className="nav-link links"
              style={{ color: "white" }}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="nav-link links"
              style={{ color: "white" }}
            >
              Contact
            </Link>

            <Button variant="warning" className="btnlink ml-2">
              <Link to="/Signup" className="btnlink">
                Sign up
              </Link>
            </Button>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComp;

// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbarcomp.css";
// import { NavItem, Button, Navbar } from "react-bootstrap";

// const NavbarComp = () => {
//   return (
//     <NavItem className="bgcolor navbar navbar-expand-lg col-12">
//       <ul className=" navbar-nav me-auto mb-2 mb-lg-0  container-fluid ulcontainer ">
//         <li
//           style={{
//             fontSize: "24px",
//             background: "-webkit-linear-gradient(#eee, #333)",
//             webkitBackgroundClip: "text",
//             webkitTextFillColor: " transparent",
//           }}
//         >
//           Livespace
//         </li>
//         <Navbar.Collapse>
//           <li>
//             <Link to="/" className="linkdeco">
//               {" "}
//               Home{" "}
//             </Link>
//           </li>

//           <li>
//             <Link to="/about" className="linkdeco">
//               {" "}
//               About{" "}
//             </Link>
//           </li>

//           <li>
//             <Link to="/services" className="linkdeco">
//               {" "}
//               Services{" "}
//             </Link>
//           </li>
//           {/* <li>
//           <Link to="/pagination" className="linkdeco">
//             {" "}
//             Paginationdata{" "}
//           </Link>
//         </li> */}

//           <li>
//             <Link to="/contact" className="linkdeco">
//               {" "}
//               Contact{" "}
//             </Link>
//           </li>

//           <Button className="btn" variant="warning" size="sm">
//             <Link to="/Signup" style={{ textDecoration: "none" }}>
//               Sign up
//             </Link>
//           </Button>
//         </Navbar.Collapse>
//       </ul>
//     </NavItem>
//   );
// };

// export default NavbarComp;

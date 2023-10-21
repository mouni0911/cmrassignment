import React from "react";
import "./Services.css";
import Footer from "./Footer";

const Services = () => {
  return (
    <>
      <div className=" services">
        <p className="service-para">
          "Interior services" typically refer to services related to the design,
          decoration, and improvement of the interior spaces of buildings,
          homes, offices, or commercial establishments. These services aim to
          create aesthetically pleasing, functional, and comfortable interior
          environments.
        </p>

        <div className="row justify-content-center">
          <div className="col-md-8 col-sm-12">
            <div className="search">
              <i className="fa fa-search"></i>
              <input
                type="text"
                className="form-control"
                placeholder="Have a question? Ask Now"
              />
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;

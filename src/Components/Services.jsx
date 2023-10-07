import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <div className="services">
      <p className="service-para">
        "Interior services" typically refer to services related to the design,
        decoration, and improvement of the interior spaces of buildings, homes,
        offices, or commercial establishments. These services aim to create
        aesthetically pleasing, functional, and comfortable interior
        environments.
      </p>
      <div class="container">
        <div class="row height d-flex justify-content-center align-items-center">
          <div class="col-md-8">
            <div class="search">
              <i class="fa fa-search"></i>
              <input
                type="text"
                class="form-control"
                placeholder="Have a question? Ask Now"
              />
              <button class="btn btn-primary">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

import React from "react";
import "./Contact.css";
import { Button } from "react-bootstrap";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <h1>Contact</h1>

        <div className="text form-group">
          <input
            type="text"
            name="yourname"
            id="yourname"
            placeholder="Enter your name"
            className="form-control"
            style={{
              background: "lightgray",
            }}
          />
        </div>
        <br />
        <div className="form-group">
          <input
            type="email"
            name="emailid"
            id="emailid"
            placeholder="Example:xyz@gmail.com"
            className="form-control"
            style={{
              background: "lightgray",
            }}
          />
        </div>
        <h6 style={{ color: "skyblue", fontSize: "18px", fontWeight: "600" }}>
          How can we help you?
        </h6>
        <textarea
          className="form-control"
          rows="4"
          placeholder="Your message..."
          style={{
            width: "105%",
            height: "150px",
            borderColor: "red ",
            borderRadius: "15px",
            background: "lightgray",
            border: "1px solid red",
          }}
        />
        <div className="form-group">
          <Button id="startbtn" className="mt-3">
            submit
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

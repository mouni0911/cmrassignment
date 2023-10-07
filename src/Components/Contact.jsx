import React from "react";
import "./Contact.css";
import { Button } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="contact">
      <div className="text">
        <h1>Contact</h1>
        <input
          type="text"
          name="yourname"
          id="yourname"
          placeholder="Enter your name"
          style={{
            marginBottom: "20px",
            width: "150%",
            height: "50px",
            background: "lightgray",
          }}
        />
        <br />
        <input
          type="email"
          name="emailid"
          id="emailid"
          placeholder="Example:xyz@gmail.com"
          style={{
            marginBottom: "20px",
            width: "150%",
            height: "50px",
            background: "lightgray",
          }}
        />
        <h6 style={{ color: "skyblue", fontSize: "18px", fontWeight: "600" }}>
          How can we help you?
        </h6>
        <textarea
          style={{
            width: "200%",
            height: "150px",
            borderColor: "red ",
            borderRadius: "15px",
            background: "lightgray",
            border: "1px solid red",
          }}
        />
        <br />
        <Button id="startbtn">submit</Button>
      </div>
    </div>
  );
};

export default Contact;

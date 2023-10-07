import React, { useState } from "react";

const Signup = () => {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorMessage] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    if (userName.trim() === "" || password.trim() === "") {
      setErrorMessage("Please provide username and password");
    } else if (userName !== "admin" || password !== "admin") {
      setErrorMessage("You are not authorized");
    } else {
      console.log("You are successfully logged in");
      setErrorMessage("");
      setuserName("");
      setPassword("");
    }
  };

  const myStyle = {
    display: "grid",
    gap: "3px",
    marginTop: "5%",
    justifyContent: "center",
    fontFamily: "sans-serif",
  };

  return (
    <form onSubmit={submitForm} style={myStyle}>
      <h3 style={{ alignItems: "center", fontWeight: "700" }}>Signup</h3>

      <label htmlFor="userName">User Name</label>

      <input
        type="text"
        name="userName"
        id="userName"
        onChange={(event) => {
          setuserName(event.target.value);
        }}
        value={userName}
        style={{ borderEndEndRadius: "5px" }}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        value={password}
        style={{ borderEndEndRadius: "5px" }}
      />

      {errorText && (
        <h5 style={{ color: "red", fontFamily: "sans-serif" }}>{errorText} </h5>
      )}
      <br></br>
      <button
        style={{
          width: "100px",
          padding: "5px",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
        className="bg-primary"
      >
        SignIn
      </button>
    </form>
  );
};

export default Signup;

import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div>
      {/* <div className="navbar"></div> */}

      <div
        className="card-container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div
          className="card"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            className="card-logo-container"
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <img
              className="card-logo"
              src="https://i.imgur.com/QY5hLHa.png"
              alt=""
              style={{ height: "100px", width: "80%" }}
            />
          </div>

          <div
            className="login-input"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "25px",
              width: "100%",
            }}
          >
            <div style={{ width: "70%" }}>
              <input type="email" id="login-email" placeholder="Email" />
              {/* <label htmlFor="login-email">
              {" "}
              <h3>Email</h3>{" "}
            </label> */}
            </div>
          </div>

          <div
            className="login-input"
            style={{
              marginTop: "25px",
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <div style={{ width: "70%" }}>
              <input
                type="password"
                placeholder="Password"
                id="login-password"
              />
              {/* <label htmlFor="login-password">
              {" "}
              <h3>Password</h3>{" "}
            </label> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

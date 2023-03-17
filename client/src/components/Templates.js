import React from "react";

import { Link } from "react-router-dom";

export default function Templates() {
  return (
    <div style={{width: "100%", height: "100vh", margin: "auto"}}>
      <div className="container pt-5" style={{height: "100vh", display: "flex",alignItems: "center" }} >
        <div className="row">
          <div className="col" style={{ marginRight:"30px"}}>
            <div
              className="card"
              style={{ width: "20rem", backgroundColor:"#ffffffc0" }}
            >
              <img src="./sample/login.png" alt="login" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Login Form</h5>
                <p className="card-text">HTML + CSS</p>
                <div className="text-center">
                  <Link
                    to="/GetLogin"
                    className="btn btn-light"
                    style={{ backgroundColor: "#00008b", color: "white" }}
                  >
                    Custom
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col" style={{ marginRight:"30px"}}>
            <div
              className="card"
              style={{ width: "20rem", backgroundColor:"#ffffffc0" }}
            >
              <img src="./sample/register.png" alt="register" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Register Form</h5>
                <p className="card-text">HTML + CSS</p>
                <div className="text-center">
                  <Link
                    to="/GetRegister"
                    className="btn btn-light"
                    style={{ backgroundColor: "#00008b", color: "white" }}
                  >
                    Custom
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

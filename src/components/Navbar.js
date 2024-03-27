import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid ">
          <Link className="navbar-brand fs-1 fst-italic" to="/">
            <b>SayEat!</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" style={{display:"flex", justifyContent:"right"}}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-Link active"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    
                    transition: "background-color 0.3s ease",
                    fontWeight: "30px",
                  }}
                  aria-current="page"
                  to="/"
                >
                 <b> Home</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-Link"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    padding: "8px 12px",
                    marginLeft: "20px",
                    borderRadius: "8px",
                   
                    transition: "background-color 0.3s ease",
                    fontWeight: "30px",
                  }}
                  to="/login"
                >
                  <b>Login</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-Link"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    padding: "8px 12px",
                    marginLeft: "20px",
                    borderRadius: "8px",
                    
                    transition: "background-color 0.3s ease",
                    fontWeight: "30px",
                  }}
                  to="/signup"
                >
                  <b>Signup</b>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

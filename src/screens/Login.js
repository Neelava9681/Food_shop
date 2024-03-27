import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });

  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
    console.log(credentials);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
     console.log(credentials)
 
  
   
     const response = await axios.post(
      "http://localhost:5001/api/loginuser",
      {
        email: credentials.email,
        password: credentials.password
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  console.log(response)

  if (response.data.success) {
    console.log("Login successful");
  } else {
    console.log("Login unsuccessful");
  }
  } catch (error) {
  console.error("Error:", error);
  }
  };
  

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={credentials.email}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={credentials.password}
              onChange={onChange}
            />
          </div>
         
          <button type="submit" className="btn btn-success">
            Submit
          </button>
          <Link to="/signup" className="m-3 btn btn-danger">
            I'am a new user
          </Link>
        </form>
      </div>
    </>
  );
}

export default Login;

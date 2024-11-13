import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-wrap">
          <input type="text" className="login-fields" placeholder="User Id" aria-label="UserId" aria-describedby="basic-addon1" />
          <input type="password" className="login-fields" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
          <button className="login-btn">Login</button>
      </div>
    </div>
  );
}

export default Login;

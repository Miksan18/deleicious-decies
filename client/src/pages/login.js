import React from "react";

function Login() {
  return (
    <div className="page">
      <h1>Login</h1>
      <input placeholder="Email" />
      <input placeholder="Password" type="password" />
      <button>Login</button>
    </div>
  );
}

export default Login;
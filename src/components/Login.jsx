import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="container">
        <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center vh-100 bg-light">
                <div className="card p-4 shadow-lg"  style={{ width: "450px", borderRadius: "10px" }}>
                    <h5 className="fw-bold">Welcome!</h5>
                    <h3 className="fw-bold">Log in to</h3>
                    <p className="text-muted">Continue</p>
                    <div className="mb-3">
                        <label className="form-label">User name or ID</label>
                        <input type="text" className="form-control" placeholder="Enter your user name or ID" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <div className="input-group">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="form-control"
                            placeholder="Enter your password"
                        />
                        <button 
                            className="btn position-absolute end-0 z-3" 
                            type="button" 
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                        </div>
                    </div>   
                    <div className="d-flex justify-content-between mb-3">
                        <div>
                        <input type="checkbox" id="rememberMe" /> 
                        <label className="ms-2" htmlFor="rememberMe">Remember me</label>
                        </div>
                        <a href="#" className="text-decoration-none">Forgot Password?</a>
                    </div>
                    <button className="btn btn-primary w-100">Login</button>  
                    <p className="text-center mt-3">
                        Don't have an Account? <a href="#" className="fw-bold text-primary">Register</a>
                    </p>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Login
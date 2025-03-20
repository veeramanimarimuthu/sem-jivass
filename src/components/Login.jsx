import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

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
                        <input type="text" className="form-control" placeholder="Enter your user name or ID" style={{ fontSize: "14px"}} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <div className="input-group">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                placeholder="Enter your password"
                                style={{ fontSize: "14px"}}
                            />
                            <a 
                                className="custom-btn" 
                                type="button" 
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </a>
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
                        Don't have an Account? <Link to="/register" className="fw-bold text-primary">Register</Link>
                    </p>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Login
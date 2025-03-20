import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-10 col-lg-12 d-flex pt-5 pt-md-0 justify-content-center align-items-center custom-vh">
              <div>
                <h2 className="fw-bold">Register</h2>
                <p className="text-muted">
                  Welcome to the Smart Energymeter Monitoring Registration page! Please fill in the required information to create your account.
                </p>
        
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">First Name</label>
                      <input type="text" className="form-control" placeholder="Enter First Name" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Last Name</label>
                      <input type="text" className="form-control" placeholder="Enter Last Name" />
                    </div>
                  </div>
        
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Date of Birth</label>
                      <input type="date" className="form-control" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Gender</label>
                      <select className="form-select">
                        <option>Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
        
                  <div className="mb-3">
                    <label className="form-label">Onpassive Email ID</label>
                    <input type="email" className="form-control" placeholder="Enter Onpassive Email ID" />
                  </div>
        
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Password</label>
                      <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Confirm Password</label>
                      <input type="password" className="form-control" placeholder="Confirm Password" />
                    </div>
                  </div>
        
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Contact No.</label>
                      <input type="text" className="form-control" placeholder="Contact No." />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Shift Time</label>
                      <select className="form-select">
                        <option>Select Shift Time</option>
                        <option>Morning</option>
                        <option>Afternoon</option>
                        <option>Night</option>
                      </select>
                    </div>
                  </div>
        
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Role</label>
                      <select className="form-select">
                        <option>Select Role</option>
                        <option>Admin</option>
                        <option>User</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Branch</label>
                      <select className="form-select">
                        <option>Select Branch</option>
                        <option>Branch 1</option>
                        <option>Branch 2</option>
                      </select>
                    </div>
                  </div>
        
                  <button className="btn btn-primary w-100">REGISTER</button>
                </form>
        
                <p className="text-center mt-3">
                  Already have an account? <Link to="/" className="fw-bold text-primary">Login here</Link>
                </p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Register
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


function Login() {
  return (
    <div>

<div className="container  mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4">Welcome to React store</h2>
              <form >
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block mt-3">
                  Log In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login
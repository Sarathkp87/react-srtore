import React from 'react'

function Productdetails() {
  return (
<div className="container mt-5">
      <h2 className="mb-4">Product Details</h2>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://via.placeholder.com/150"
              className="img-fluid rounded-start"
              alt="Product"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Product Name</h5>
              <p className="card-text">
                Product Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className="card-text">Rate: $19.99</p>
              <div className="row align-items-center">
                <div className="col-md-4">
                  <label htmlFor="quantity" className="form-label">Quantity:</label>
                  <div className="input-group">
                    <button className="btn btn-outline-secondary" type="button" >-</button>
                    <input type="text" className="form-control text-center" id="quantity"  />
                    <button className="btn btn-outline-secondary" type="button" >+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <button className="btn btn-success">Place Order</button>
      </div>
    </div> 
     )
}

export default Productdetails
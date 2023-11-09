import React from 'react'

function Cartpg() {
  return (
    <div>
         <div className="container mt-5">
      <h2 className="mb-4">Shopping Cart</h2>

      
        <div className="row">
          
            <div className="col-md-4 mb-4" >
              <div className="card">
                <img
                  src=''
                  className="card-img-top"
                  alt=''
                />
                <div className="card-body">
                  <h5 className="card-title"></h5>
                  <p className="card-text">Quantity: </p>
                  <p className="card-text">Total: </p>
                </div>
              </div>
            </div>
        

        </div>
       
        <div className="alert alert-info" role="alert">
          Your cart is empty.
        </div>
      

      {
        <div className="d-flex justify-content-between mt-4">
          <h5>Total Amount: $</h5>
          <button className="btn btn-success">
            Confirm Order
          </button>
        </div>
      }
    </div>
    </div>
  )
}

export default Cartpg
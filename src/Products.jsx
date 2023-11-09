import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Products() {
  return (
  
    <div className="container mt-5">
      <h2 className="mb-4">Welcome</h2>
      <div className="row">
        
          <div className="col-md-4 mb-4" >
            <div className="card">
              <img src='' className="card-img-top"  />
              <div className="card-body">
                <h5 className="card-title">gjg</h5>
                <p className="card-text">bmb</p>
                <button
                  className="btn btn-primary"
                //   onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default Products;


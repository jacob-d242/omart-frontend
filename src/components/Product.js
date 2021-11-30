import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import './product.css';

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className=" container">
      <div className="card">
        <div className="imgbx">
          <Link to={`/product/${product._id}`}>
            <img className="medium" src={product.image} alt={product.name} />
          </Link>
          
          </div>
          <div className="contentBx">
            <Link to={`/product/${product._id}`}>
              <h2>{product.name}</h2>
           </Link>
           <div className="color">
            <Link to={`/product/${product._id}`}>
                <Rating
                  rating={product.rating  } 
                  numReviews={product.numReviews}
                />
              </Link>
            </div>
            <div className="cardprices">
            
            <div className="prices">
                  <Link to={`/product/${product._id}`}>
                    <h2>KSh {product.price}  </h2>
                  </Link>
                  </div>
                      {/*<div>
                        <Link to={`/seller/${product.seller._id}`}>
                          {product.seller.seller.name}
                        </Link>
                      </div>*/}
                      <div className="buynow">
                      <Link to={`/product/${product._id}`}>
                        <button>BuyNow</button>
                      </Link>
                      </div>
                  
                  </div>
            </div>
      </div>
    </div>
  );
}

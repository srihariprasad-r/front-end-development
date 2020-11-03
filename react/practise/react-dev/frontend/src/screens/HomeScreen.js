import React from 'react';
import data from '../data';

function HomeScreen (props) {
    return (
      <ul className="products">
        {data.products.map((product) => (
          <li>
            <div className="product">
              <img
                src={product.image}
                alt="products"
                className="product-image"
              />
              <div className="product-name">
                <a href="product.html>" Slim Shirt>
                  {product.name}
                </a>
              </div>
              <div className="product-brand">{product.brand}</div>
              <div className="product-price">{product.price}</div>
              <div className="product-rating">
                {product.rating} Stars({product.numreviews} Reviews)
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
};

export default HomeScreen;
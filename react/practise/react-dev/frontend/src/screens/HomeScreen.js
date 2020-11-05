import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from  'axios';
import {useSelector, useDispatch} from 'react-redux';

function HomeScreen (props) {

    const [products, setProducts] = useState([]);
    const productList = useSelector(state=> state.productList);
    const {product, loading, error} = productList;
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(listProducts());
      return () => {
      };
    }, []);

    return (
      <ul className="products">
        {products.map((product) => (
          <li key={product._id}>
            <div className="product">
              <Link to={"/product/" + product._id}>
                  <img src={product.image} alt="products" className="product-image" />
              </Link>
              <div className="product-name">
                <Link to={"/product/" + product._id}> {product.name} </Link>
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
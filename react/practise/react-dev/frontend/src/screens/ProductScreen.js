import React from "react";
import data from "../data";
import { Link } from 'react-router-dom';

function ProductScreen(props) {
    console.log(props);
    const product = data.products.find((x) => x._id === props.match.params.id);
  return (
    <div>
      <div class="back-to-result">
        <Link to="/">{"<<"} Back to results</Link>
      </div>
      <div className="details">
        <div className="details-image">
          <img src={product.image} alt="product"></img>
        </div>
        <div className="details-info">
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>
              <h4>
                {product.rating} Stars ({product.numreviews})
              </h4>
            </li>
            <li>
              <h4>
                Price: <b>{product.price} </b>
              </h4>
            </li>
            <li>
              Description
              <h4>
                <div>{product.description} </div>
              </h4>
            </li>
          </ul>
        </div>
        <div className="details-action">
          <ul>
            <li>Price: {product.price}</li>
            <li>Status: {product.status}</li>
            <li>
              Qty: {"  "}
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </li>
            <li>
              <button className="button primary">Add to Cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductScreen;

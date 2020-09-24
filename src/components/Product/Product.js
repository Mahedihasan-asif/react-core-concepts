import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {seller,price,stock, name,img,key}= props.product;

    
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div className="name-details">
            <h4><Link to={"/product/"+ key}>{name}</Link></h4>
            <br/>
            <p><small>{seller}</small></p>
                <p>${price}</p>
                <p> Only <strong>{stock}</strong> left in stock- order soon</p>
               
               {props.showAddToCart && <button className="main-button" 
                onClick={() => props.handleAddProduct(props.product)}>
                    add to cart
                </button>}
            </div>
        </div>
    );
};

export default Product;
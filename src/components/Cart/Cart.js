import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart =props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total+ product.price;
    }
    
    let shipping = 0;
    if(total>50){
        shipping = 4.99;}
    else if(total>0){
        shipping = 0;

    }

    const tax = total/10;

    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div >
             <h2>This is cart </h2>
                    <p>order summery: {cart.length}</p>
                     <p><small>shipping cost :{shipping}</small></p>
                        <p>Tax+Vat {formatNumber(tax + shipping)}</p>
                    <p>total price {formatNumber(total+shipping)}</p>

                   
                        <Link to="/review"> <button className="main-button">Order Review</button></Link>

        </div>
    );
};
export default Cart;
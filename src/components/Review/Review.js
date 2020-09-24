import React, { useState, useEffect } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';

const Review = () => {
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);

        const cartProducts = productKeys.map( key =>{
            const product = fakeData.find(pro => pro.key === key);
            product.quantity = saveCart[key];
            return product;
    });
    setCart(cartProducts);
    })
    return (
        <div>
            <h3>this is review {cart.length} </h3>
        </div>
    );
};

export default Review;
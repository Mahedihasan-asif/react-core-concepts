import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    console.log(fakeData);
    const first10 = fakeData.slice(0,10);
   const [product,setProduct] = useState(first10);
   const [cart, setCart] = useState([]);
   
   const handleAddProduct = (product) => {
       console.log("clicked here",product);
       const newCart = [...cart, product];
       setCart(newCart);
       const sameProduct = newCart.filter(pro => pro.key === product.key)
       const count = sameProduct.length;
       addToDatabaseCart(product.key, count)
   }

    return (
        <div className="shop-container">
            
           <div className="product-container"> 
            <ul>
                { product.map(pro =>

                     <Product
                      key = {pro.key}
                      showAddToCart = {true}
                      handleAddProduct = {handleAddProduct}
                      product={pro}>
                    </Product>)}
            </ul>
           </div>
           <div className="cart-container">
                    <div className="cart">
                    <Cart cart={cart}></Cart>
                    </div>
        </div>
        </div>
    );
};

export default Shop;
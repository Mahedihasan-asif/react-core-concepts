import React from 'react';
import fakeData from '../../fakeData';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductDetails = () => {
    const {productKey} = useParams();
    const product = fakeData.find(pro => pro.key === productKey);
    
    return (
        <div>
            <h3>This is product details</h3>
            <Product showAddToCart={false} product={product}></Product>

        </div>
    );
};

export default ProductDetails;
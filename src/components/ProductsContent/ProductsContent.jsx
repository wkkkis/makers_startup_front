import React from 'react';
import ProductList from '../ProductList/ProductList';
import Sidebar from '../Sidebar/Sidebar';

import './productsContent.css';

const ProductsContent = () => {
    return (
        <div className="container products-content">
            <Sidebar />
            <ProductList />
        </div>
    );
};

export default ProductsContent;
import React from 'react';
import ProductList from './ProductList';
import Sidebar from './Sidebar';

const ProductsContent = () => {
    return (
        <div className="container products-content">
            <Sidebar />
            <ProductList />
        </div>
    );
};

export default ProductsContent;
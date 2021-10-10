import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
    const products = [
        {
        name: "namenamename",
        price: "1213",
        image: "https://n.nordstrommedia.com/id/sr3/64e67a24-b4e2-43b9-a5e6-1d19132f16db.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838"
       },{
        name: "namenamename",
        price: "1213",
        image: "https://n.nordstrommedia.com/id/sr3/64e67a24-b4e2-43b9-a5e6-1d19132f16db.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838"
       },{
        name: "namenamename",
        price: "1213",
        image: "https://n.nordstrommedia.com/id/sr3/64e67a24-b4e2-43b9-a5e6-1d19132f16db.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838"
       },{
        name: "namenamename",
        price: "1213",
        image: "https://n.nordstrommedia.com/id/sr3/64e67a24-b4e2-43b9-a5e6-1d19132f16db.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838"
       },{
        name: "namenamename",
        price: "1213",
        image: "https://n.nordstrommedia.com/id/sr3/64e67a24-b4e2-43b9-a5e6-1d19132f16db.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838"
       },{
        name: "namenamename",
        price: "1213",
        image: "https://n.nordstrommedia.com/id/sr3/64e67a24-b4e2-43b9-a5e6-1d19132f16db.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838"
       },
    ]
    return (
        <div className="product-list">
            {products ? products.map((item) => (<ProductCard item={item}/>)): null}
        </div>
    );
};

export default ProductList;
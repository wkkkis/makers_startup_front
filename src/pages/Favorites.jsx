import React from 'react';
import ProductCard from '../components/ProductCard';

const Favorites = () => {
  const favorites = [
    {
      name: 'namenamename',
      price: '1213',
      image:
        'https://n.nordstrommedia.com/id/sr3/64e67a24-b4e2-43b9-a5e6-1d19132f16db.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838',
    },
    {
      name: 'namenamename',
      price: '1213',
      image:
        'https://cdn.webshopapp.com/shops/326934/files/380423129/image.jpg',
    },
    {
      name: 'namenamename',
      price: '1213',
      image:
        'https://n.nordstrommedia.com/id/sr3/64e67a24-b4e2-43b9-a5e6-1d19132f16db.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838',
    },
  ];
  return (
    <div className="favorites-list-wrapper">
      <div className="product-list">
        {favorites
          ? favorites.map((item) => <ProductCard item={item} />)
          : null}
      </div>
    </div>
  );
};

export default Favorites;

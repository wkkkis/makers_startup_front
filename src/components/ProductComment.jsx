import React from 'react';

import { Rate } from 'antd';

const ProductComment = ({item}) => {
    return (
        <div className="product-comments__item">
            <div>
                <Rate defaultValue={5} />
            </div>
            <div>{item.comment}</div>
        </div>
    );
};

export default ProductComment;
import React from 'react';
import AddCommentForm from './AddCommentForm';
import ProductComment from './ProductComment';

const ProductCommentsList = () => {
    const comments = [
       { 
           comment: "blabla",
           user: "abd@gmail.com"
       },
       { 
        comment: "blabla",
        user: "abd@gmail.com"
    },
    { 
        comment: "blabla",
        user: "abd@gmail.com"
    },
    { 
        comment: "blabla",
        user: "abd@gmail.com"
    },

    ]
    return (
        <div>
         <AddCommentForm />
         <div className="product-comments__title">
             Comments (100)
         </div>
         <div>
            { comments ? comments.map((item) => (<ProductComment item={item}/>)): null}
         </div>
        </div>
    );
};

export default ProductCommentsList;
import React from 'react';

import './UserCard.css';

const UserCard = () => {
    return (
        <div className="user-card">
            <div><img className="user-card__image" src="https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png" alt="" /></div>
            <div>UserName</div>
            <div>Seller</div>
        </div>
    );
};

export default UserCard;
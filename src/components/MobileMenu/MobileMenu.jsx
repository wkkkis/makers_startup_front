import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { GrClose } from "react-icons/gr";

import './MobileMenu.css';


const MobileMenu = ({setMobileMenu}) => {
    const navbar_items = [
        {
            name: "Profile"
        },
        {
          name: "Home"
        },
        {
          name: "Shop"
        },
        {
          name: "Cart"
        },
        {
          name: "Page"
        },
        {
          name: "Page"
        },
        {
          name: "Page"
        }
      ];    
    return (
        <div className="mobile-menu">
            <div className="mobile-menu__content">
            <div className="mobile-menu__close">
            <GrClose onClick={()=> setMobileMenu(false)} className="mobile-menu_close-icon"/>
            </div>
            {navbar_items.map((item) => <div  className="mobile-menu__item">{item.name}</div>)}
            </div>
        </div>          
    );
};

export default MobileMenu;
import React from 'react';

import Logo from '../assests/logo/logo.png';

import { MdOutlineShoppingBag } from 'react-icons/md';
import { BiUserCircle, BiMenuAltLeft } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';

import MobileMenu from './MobileMenu';

const Header = () => {
  const navbar_items = [
    {
      name: 'Home'
    },
    {
      name: 'Shop'
    },
    {
      name: 'Page'
    },
    {
      name: 'Page'
    },
    {
      name: 'Page'
    },
    {
      name: 'Page'
    }
  ];
  const [mobileMenu, setMobileMenu] = React.useState(false);

  return (
    <>
      <div className="header">
        <div className="header__top">
          <div className="mobile-menu-icon">
            <BiMenuAltLeft className="mobile-menu-icon-image"
                           onClick={() => setMobileMenu(true)} />
          </div>
          <img className="header__logo" src={Logo}  alt=""/>
        </div>
        <div className="header__search">
          <input className="header__search-input" placeholder="Search..." />
          <BsSearch className="header__search-icon" />
        </div>
        <div className="header__icons">
          <MdOutlineShoppingBag className="header__cart-icon" />
          <BiUserCircle className="header__user-icon" />
        </div>
      </div>
      <div className="navbar">
        {navbar_items.map((item) => (<div className="navbar__item">{item.name}</div>))}
      </div>
      {mobileMenu ? <MobileMenu setMobileMenu={setMobileMenu} /> : null}
    </>
  )
}

export default Header
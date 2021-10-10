import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import Logo from '../assests/logo/logo.png';

import { MdOutlineShoppingBag } from 'react-icons/md';
import { BiUserCircle, BiMenuAltLeft } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';

import MobileMenu from './MobileMenu';

const Header = () => {
  const navbar_items = [
    {
      name: "Home",
      path: "/"
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
  const history = useHistory();
  console.log('location', history.location.pathname);
  return (
    <>
    <div className="header">
      <div className="header__top">          <div className="mobile-menu-icon"><BiMenuAltLeft className="mobile-menu-icon-image" onClick={()=> setMobileMenu(true)}/></div>
      <Link to='/'>
<img className='header__logo' src={Logo} /></Link></div>
      <div className="header__search"><input className='header__search-input' placeholder="Search..."/><BsSearch className="header__search-icon"/></div>
      <div className="header__icons"><Link to='/cart'> <MdOutlineShoppingBag className={window.location.pathname == "/cart" ? "header__cart-icon-active" : "header__cart-icon"}/></Link><Link to='/profile'><BiUserCircle className={ window.location.pathname == '/profile' ? "header__cart-icon-active" : "header__user-icon"}/></Link></div>
    </div>
    <div className="navbar">
      {navbar_items.map((item) => (<div onClick={()=> {item.path ? history.push(item.path): history.push('/')} } className="navbar__item">{item.name}</div>))}
    </div>
    {mobileMenu ? <MobileMenu setMobileMenu={setMobileMenu}/> : null}
    </>
  )
}

export default Header
import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css';

const Navbar = () => {
  return (
    <div className="nav">
      <span>
        <Link to="/Home" className="link" id="logo">
         Nike TN
        </Link>
      </span>
      <div className="links">
        <Link to="/Profile" className='link'>Profile</Link>
        <Link to="/Cart" className="link">Cart</Link>
        <Link to="/" className="link">SignIn</Link>
        <Link to="/SignUp" className="link">SignUp</Link>
      </div>
    </div>
  );
};

export default Navbar;

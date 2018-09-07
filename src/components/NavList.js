import React from 'react';
import { Link } from 'react-router-dom';
import './NavList.css';

const NavList = ({}) => {
  return(
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/user">User</Link></li>
        <li><Link to="/user/foo">User Foo</Link></li>
      </ul>
    </nav>
  );
}

export default NavList;

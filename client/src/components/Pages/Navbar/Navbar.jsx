// frontend/src/app/components/Navbar.js

import React from 'react';
import './Navbar.css'; // Import CSS file for styling (create this file in the same directory)
import Navlogo from '../../Asset/Navlogo.svg'
import Search from '../Search/Search';
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const navigate=useNavigate()
    const handleSearch = () => {
        // Perform search action here
        console.log('Search triggered');
      };
  return (
    <nav className="navbar">
      <div className="navbar-left" onClick={()=>navigate('/')}>
        <img src={Navlogo} alt="Logo" className="imgLogo" />
      </div>
      <div className="navbar-right">
      
      <Search onSearch={handleSearch} />
        <a href="" className="signup">Sign Up</a>
        <a href="" className="login">Login</a>
      </div>
    </nav>
  );
}

export default Navbar;

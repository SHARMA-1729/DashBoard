import React from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';
import Logo from '../assets/logyy.png';
// import { Link } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="logo">
        
     
        <img src={Logo} alt="Zomato" />
       
       
      </div>
      {/* <div className="location-search">
        <input type="text" className="search-input" placeholder="Search for restaurant, cuisine or a dish" />
      </div> */}
     
      <div className="auth-buttons">
        <button   onClick={() => navigate('/login')} className="login-button">Log in</button>
        <button  onClick={() => navigate('/register')} className="signup-button">Sign up</button>
      </div>
    </header>
  );
};

export default Header;

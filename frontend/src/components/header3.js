import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import './header.css';
import{ clearUser} from '../utils/userSlice';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
const Header = () => {
  const dispatch=useDispatch();
  const logout = (e) => {
    e.preventDefault();
    dispatch(clearUser());
    navigate('/');
    alert("user logged out Successfully");
  }
  const navigate = useNavigate();
  const data = useSelector((state) => state.user.user);
  return (
    <header className="header">
      <div className="logo">
      <Link to="/browse">
        <img src={Logo} alt="Zomato" />
        </Link>
      </div>
      {/* <div className="location-search">
        <input type="text" className="search-input" placeholder="Search for restaurant, cuisine or a dish" />
      </div> */}
      <div className="auth-buttons">
      <Link to="/account">
  <img
    src={data.user.avatar}
    alt="Profile"
    style={{
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      objectFit: 'cover',
      cursor: 'pointer' // Changes cursor to pointer when hovering over the image
    }}
  />
</Link>
        <button  onClick={logout} className="signup-button">LogOut</button>
      </div>
    </header>
  );
};

export default Header;

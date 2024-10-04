import React from 'react';
import './account.css';
import { useSelector } from 'react-redux';
import Header from './header1.js';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard.js';
import LineChartComponent from './LineChartComponent';
export default function EditButton() {

  const data = useSelector((state) => state.user.user);
 
  
  return (
<>
<Header/>
    <div className="profile-container">
      <aside className="sidebar">
        <div className="user-info">
          <img src={data.user.avatar} alt="User Avatar" className="avatar" />
          <h3 className="user-name">Hello!! {data.user.fullName}</h3>
        </div>
        <nav className="menu">
          <ul>
          <li>Release Music</li>
            <li>Caller Tune</li>
            <li>Service Request</li>
            <li>Bajao Radio Request</li>
            <li>Labels</li>
            <li>My Artist</li>
            <Link to="/update" >
            <li>Update Account</li>
            </Link>
          </ul>
        </nav>
      </aside>

      <main className="profile-details">
      <div>
        <Dashboard/>
        </div>
       
        {/* <h2>Personal Information</h2> */}
        <hr/>
        <div className='chart'>
           <h1>chart</h1>
           <LineChartComponent/>
      </div>
        {/* <div className="details-section">
          <div className="detail-item">
            <label>User ID</label>
            
            <p>{data.user._id}</p>
          </div>
          <div className="detail-item">
            <label>User Name</label>
            
            <p>{data.user.fullName}</p>
          </div>
         
         
          <div className="detail-item">
            <label>Email Address</label>
            <p>{data.user.email}</p>
          </div>
          <div className="detail-item">
            <label>Mobile Number</label>
           <p>{data.user.phoneNumber}</p>
          </div>
        </div> */}
       
      </main>
      
     
      
      
    </div>
    
    </>
  );
}
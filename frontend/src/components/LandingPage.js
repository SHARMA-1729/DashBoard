import React from 'react';
import './LandingPage.css';
import grillImage from '../assets/gr.jpg'; // Import your image here

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1>Enjoy Our Music</h1>
        <p>Discover, stream, and create the perfect playlist for every moment. Your sound, your way – curated from the heart of music







.</p>
        <button className="cta-button">Create A Music</button>
      </div>
      <div className="landing-image">
        <img src={grillImage} alt="Delicious Meal" />
      </div>
    </div>
  );
};

export default LandingPage;

import React from 'react';
import Navbar from '../components/Navbarr';
import './Home.css'; // Import styling

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="hero-section">
        <h1>Welcome to Imagejin</h1>
        <p>Empowering your brand with creative design solutions</p>
        <button className="cta-button">Get Started</button>
      </div>
      <div className="features">
        <div className="feature-card">
          <h2>Social Media Templates</h2>
          <p>Create custom templates for all your social media needs in seconds.</p>
        </div>
        <div className="feature-card">
          <h2>Product Photography</h2>
          <p>Turn product images into professional-quality posters.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

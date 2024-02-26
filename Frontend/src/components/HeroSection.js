import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';


function HeroSection() {
  const navigate = useNavigate();


  const handleGetStartedClick = () => {
    // Use navigate to redirect to the map page
    navigate('/map');
  }

  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>Sip, Savor and Celebrate.</h1>
      <div className='hero-btns'>
        
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={() => navigate('/map')}
        >
          GET STARTED
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;
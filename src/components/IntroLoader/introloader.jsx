import React, { useEffect, useState } from 'react';
import './introloader.css';

const IntroLoader = ({ onFinishedLoading }) => {
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    // 5 segundos de animación + 1 segundo de desvanecimiento
    const timer = setTimeout(() => setAnimateOut(true), 5000);
    const finishTimer = setTimeout(() => onFinishedLoading(), 6000);

    return () => {
      clearTimeout(timer);
      clearTimeout(finishTimer);
    };
  }, [onFinishedLoading]);

  return (
    <div className={`intro-loader ${animateOut ? 'fade-out' : ''}`}>
      {/* Destellos de fondo */}
      <div className="sparkle s1"></div>
      <div className="sparkle s2"></div>
      <div className="sparkle s3"></div>

      <div className="loader-content">
        <div className="neon-box">
          <h1 className="welcome-text">
            WELCOME <br /> <span>MY WORLD</span>
          </h1>
          {/* Esquinas decorativas */}
          <div className="corner top-left"></div>
          <div className="corner bottom-right"></div>
        </div>
        
        {/* Línea de luz central */}
        <div className="light-beam"></div>
      </div>
    </div>
  );
};

export default IntroLoader;
import React, { useEffect, useState } from 'react';
import './IntroLoader.css';

const IntroLoader = ({ onFinished }) => {
  const [stage, setStage] = useState('icon'); 

  useEffect(() => {
    const timerZoom = setTimeout(() => setStage('zoom'), 1500);

    const timerLogo = setTimeout(() => setStage('logo'), 2300);

    const timerExit = setTimeout(() => setStage('exit'), 4000);

    const timerFinish = setTimeout(() => {
      if (onFinished) onFinished();
    }, 5500);

    return () => {
      clearTimeout(timerZoom);
      clearTimeout(timerLogo);
      clearTimeout(timerExit);
      clearTimeout(timerFinish);
    };
  }, [onFinished]);

  return (
    <div className={`intro-wrapper ${stage === 'exit' ? 'fade-out-all' : ''}`}>
      {stage === 'icon' || stage === 'zoom' ? (
    
        <div className={`intro-icon-initial ${stage === 'zoom' ? 'zoom-out-fade' : ''}`}>
          <div className="moon-initial">
            <div className="star-initial">★</div>
          </div>
        </div>
      ) : (
       
        <div className="logo-final">
          <div className="lunar-icon">
            <div className="moon">
              <div className="star">★</div>
            </div>
          </div>
          <h2 className="brand-name">LUNAR DEV</h2>
        </div>
      )}
    </div>
  );
};

export default IntroLoader;
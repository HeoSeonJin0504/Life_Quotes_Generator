import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Introduction from './components/Introduction';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <Banner style={{ width: `${Math.min(windowWidth * 0.2, 200)}px`, height: 'auto'}} />
        <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-end'}}>
          <Login />
          <Signup />
        </div>
      </div>
      <Introduction />
    </div>
  );
};

export default App;

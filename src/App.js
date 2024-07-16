import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Banner from './components/Banner';
import Introduction from './components/Introduction';
import Login from './components/Login';
import Signup from './components/Signup';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import './App.css';

const App = () => {
  // 창 너비 상태 관리
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // 창 크기 변화 감지 및 이벤트 리스너 정리
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 빈 배열은 마운트 시 한 번만 실행

  return (
    <Router>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
        {/* 배너와 네비게이션 바 */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <Banner style={{ width: `${Math.min(windowWidth * 0.2, 200)}px`, height: 'auto' }} />
          <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-end' }}>
            {/* 네비게이션 링크 */}
            <Link to="/login"><Login /></Link>
            <Link to="/signup"><Signup /></Link>
          </div>
        </div>

        {/* 라우팅 구성 */}
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

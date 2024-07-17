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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // 회원 데이터를 저장할 상태 추가
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 회원가입 함수
  const handleSignup = (newUser) => {
    const userExists = users.some(user => user.id === newUser.id);
    if (userExists) {
      alert('이미 있는 아이디입니다.');
    } else {
      setUsers([...users, newUser]);
      alert('회원가입 성공!');
    }
  };

  // 로그인 함수
  const handleLogin = (id, password) => {
    const user = users.find(user => user.id === id && user.password === password);
    if (!user) {
      alert('아이디 및 비밀번호를 확인하세요.');
    } else {
      alert('로그인 성공!');
    }
  };

  return (
    <Router>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <Banner style={{ width: `${Math.min(windowWidth * 0.2, 200)}px`, height: 'auto' }} />
          <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-end' }}>
            <Link to="/login"><Login /></Link>
            <Link to="/signup"><Signup /></Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignupPage onSignup={handleSignup} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin(id, password);
    navigate('/dashboard');
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>로그인</h1>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
          style={{ padding: '10px', margin: '5px', width: '80%', maxWidth: '300px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '10px', margin: '5px', width: '80%', maxWidth: '300px' }}
        />
      </div>
      <div>
        <button
          onClick={handleLogin}
          style={{ padding: '10px 20px', margin: '5px' }}
        >
          로그인
        </button>
        <Link to="/signup">
          <button style={{ padding: '10px 20px', margin: '5px' }}>
            회원가입
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  // 상태 관리: 아이디와 비밀번호
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  // 로그인 처리 함수
  const handleLogin = () => {
    // 실제 로그인 로직은 여기에 구현될 수 있음
    console.log('로그인 시도:', { id, password });
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>로그인</h1>
      <div style={{ marginBottom: '10px' }}>
        {/* 아이디 입력 필드 */}
        <input
          type="text"
          placeholder="아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
          style={{ padding: '10px', margin: '5px', width: '80%', maxWidth: '300px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        {/* 비밀번호 입력 필드 */}
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '10px', margin: '5px', width: '80%', maxWidth: '300px' }}
        />
      </div>
      <div>
        {/* 로그인 버튼 */}
        <button
          onClick={handleLogin}
          style={{ padding: '10px 20px', margin: '5px' }}
        >
          로그인
        </button>
        {/* 회원가입 링크 */}
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
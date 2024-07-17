import React, { useState } from 'react';

const SignupPage = ({ onSignup }) => {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        onSignup({ name, id, password });
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>회원가입</h1>
            <div style={{ marginBottom: '10px' }}>
                <input
                    type="text"
                    placeholder="이름"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ padding: '10px', margin: '5px', width: '80%', maxWidth: '300px' }}
                />
            </div>
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
                    onClick={handleSignup}
                    style={{ padding: '10px 20px', margin: '5px' }}
                >
                    회원가입
                </button>
            </div>
        </div>
    );
};

export default SignupPage;

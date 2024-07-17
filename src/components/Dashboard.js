import React from 'react';

// 랜덤 명언 배열
const quotes = [
    '삶이 있는 한 희망은 있다 -키케로-',
    '하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다. -사무엘존슨-',
    '피할수 없으면 즐겨라 –로버트 엘리엇-',
    '먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에 –엘사 맥스웰-',
];

const Dashboard = ({ user }) => {
    if (!user) return null; // 사용자가 없으면 아무것도 렌더링하지 않음

    // 현재 날짜 구하기
    const currentDate = new Date().toLocaleDateString();

    // 랜덤 명언 선택
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <div>
                <h2>{currentDate}</h2>
                <div style={{ border: '1px solid black', padding: '20px', margin: '20px 0' }}>
                    <p>{randomQuote}</p>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <button style={{ padding: '10px 20px', marginRight: '10px' }}>다짐</button>
                <button style={{ padding: '10px 20px' }}>저장</button>
            </div>
        </div>
    );
};

export default Dashboard;

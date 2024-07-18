import React, { useState, useEffect } from 'react';

// 랜덤 명언 배열
const quotes = [
    '삶이 있는 한 희망은 있다 -키케로-',
    '하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다. -사무엘존슨-',
    '피할수 없으면 즐겨라 –로버트 엘리엇-',
    '먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에 –엘사 맥스웰-',
];

const Dashboard = ({ user }) => {
    // 입력한 다짐을 저장
    const [promise, setPromise] = useState('');

    // 페이지가 처음 로드될 때 선택된 랜덤 명언을 저장
    const [randomQuote, setRandomQuote] = useState('');

    // 작성한 다짐 목록을 보여줄지 여부를 결정
    const [showPromises, setShowPromises] = useState(false);

    // 저장된 모든 다짐 목록을 저장
    const [promises, setPromises] = useState([]);

    // 컴포넌트가 처음 렌더링될 때 실행됩니다.
    useEffect(() => {
        // 랜덤 명언을 선택
        const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setRandomQuote(selectedQuote);
    }, []);

    // 다짐을 저장하는 함수
    const handleSave = () => {
        // 기존 다짐 목록에 새로운 다짐을 추가
        const updatedPromises = [...promises, promise];
        setPromises(updatedPromises);

        // 입력 필드를 비우고 알림 메시지 출력
        setPromise('');
        alert('다짐이 저장되었습니다.');
    };

    // 다짐 목록을 보여주는 함수
    const handleShowPromises = () => {
        setShowPromises(true);
    };

    // 다짐 목록을 닫는 함수
    const handleClosePromises = () => {
        setShowPromises(false);
    };

    // 로그인 상태가 아니면 렌더링 X
    if (!user) return null;

    // 현재 날짜 구하기
    const currentDate = new Date().toLocaleDateString();

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            {/* 현재 날짜와 랜덤 명언 출력 */}
            <div>
                <h2>{currentDate}</h2>
                <div style={{ border: '1px solid black', padding: '20px', margin: '20px 0' }}>
                    <p>{randomQuote}</p>
                </div>
            </div>

            {/* 다짐 입력 필드 및 버튼을 출력. */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <input
                    type="text"
                    placeholder="다짐을 입력하세요"
                    value={promise}
                    onChange={(e) => setPromise(e.target.value)}
                    style={{ padding: '10px', margin: '5px', width: '80%', maxWidth: '300px' }}
                />
                <button onClick={handleSave} style={{ padding: '10px 20px' }}>저장</button>
                <button onClick={handleShowPromises} style={{ padding: '10px 20px', marginLeft: '10px' }}>작성한 다짐 보기</button>
            </div>

            {/* 다짐 목록을 보여주는 모달 창 */}
            {showPromises && (
                <div style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'white',
                    border: '1px solid black',
                    padding: '20px',
                    zIndex: 1000,
                    maxHeight: '80%',
                    overflowY: 'auto'
                }}>
                    <h3>작성한 다짐 목록</h3>
                    <ul>
                        {promises.map((p, index) => (
                            <li key={index}>{p}</li>
                        ))}
                    </ul>
                    <button onClick={handleClosePromises} style={{ padding: '10px 20px', marginTop: '10px' }}>닫기</button>
                </div>
            )}
        </div>
    );
};

export default Dashboard;

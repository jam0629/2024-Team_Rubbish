    import React from 'react';
    import '../fonts.css';
    import trashIcon from '../assets/img/icon _trash_.png';

    const OnboardingPage = () => {
        return (
            <div 
                style={{ 
                    width: '100vw', // 화면 너비에 맞추기
                    height: '100vh', // 화면 높이에 맞추기
                    position: 'relative', // 자식 요소의 절대 배치를 위한 기준
                    display: 'flex',
                    alignItems: 'center',    
                    flexDirection: 'column', // 자식 요소를 위아래로 나란히 배치
                }}
            >
                {/* 쓰레기통 아이콘 */}
                <img 
                    src={trashIcon} 
                    alt="Trash_Img"
                    style={{
                        position: 'absolute',
                        top: '35.7vh', // 높이 777px 기준 반응형 설정
                        width: '12.5vw', // 화면 너비에 맞춘 반응형 너비
                        height: '7.1vh', // 높이에 맞춘 반응형 높이
                        margin: '5',
                        padding: '0', 
                    }} 
                />
                {/* 'Rubbish' 텍스트 */}
                <h1     
                    style={{ 
                        position: 'absolute',
                        top: '43.5vh', // 높이 777px 기준
                        margin: '0', 
                        padding: '0', 
                        fontFamily: 'Fugaz One',
                        fontSize: 'calc(4vw + 4vh)', // 반응형 폰트 크기
                        fontWeight: '400',
                        lineHeight: '8.8vh', 
                        textAlign: 'center', // 텍스트 중앙 정렬
                    }}
                >
                    Rubbish
                </h1>
                {/* 시작하기 버튼 */}
                <button
                    style={{
                        position: 'absolute',
                        top: '85vh', // 높이 777px 기준 반응형
                        width: '76.3vw', // 화면 너비에 맞춘 반응형 너비
                        height: '5.6vh', // 높이에 맞춘 반응형 높이
                        padding: '0 14px',
                        borderRadius: '6px',
                        backgroundColor: '#4CA736',
                        color: '#fff',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '2vh', // 반응형 글씨 크기
                        fontWeight: '400',
                    }}
                >
                    시작하기
                </button>

                {/* 로그인 버튼 */}
                <button
                    style={{
                        position: 'absolute',
                        top: '92vh', // 높이 777px 기준 반응형
                        width: '76.3vw', // 화면 너비에 맞춘 반응형 너비
                        height: '5.6vh', // 높이에 맞춘 반응형 높이
                        padding: '0 14px',
                        borderRadius: '6px',
                        backgroundColor: '#fff',
                        color: '#4CA736',
                        border: '1px solid #4CA736', // 테두리 색상 설정
                        cursor: 'pointer',
                        fontSize: '2vh', // 반응형 글씨 크기
                        fontWeight: '400',
                    }}
                >
                    로그인
                </button>
            </div>
        );
    };

    export default OnboardingPage;
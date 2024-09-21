import React, { useState } from 'react';
import '../fonts.css';
import selectedIcon from '../assets/img/slected.png'; // 아이콘 경로

const SignUpPage = () => {
    // useState 훅을 사용하여 각 input의 상태 관리
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [isUsernameAvailable, setIsUsernameAvailable] = useState(null); // 중복확인 결과 상태

    // username 중복 확인 함수
    const checkUsername = async () => {
        try {
            const response = await fetch('https://your-api-url/check-username', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username }), // username을 서버로 전송
            });

            const data = await response.json();

            if (data.isAvailable) {
                setIsUsernameAvailable(true);
                alert('사용 가능한 아이디입니다.');
            } else {
                setIsUsernameAvailable(false);
                alert('이미 사용 중인 아이디입니다.');
            }
        } catch (error) {
            console.error('아이디 중복 확인 오류:', error);
            alert('중복 확인 중 오류가 발생했습니다.');
        }
    };

    function printValue() {
        console.log(name, username, password, phoneNumber, verificationCode);
    }

    return (
        <div
            style={{ 
                width: '100vw', 
                height: '100vh', 
                position: 'relative', 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center', 
                flexDirection: 'column', 
            }}
        >
            {/* 'Rubbish' 텍스트 */}
            <h1     
                style={{ 
                    position: 'absolute',
                    top: '23.9vh', 
                    margin: '0', 
                    padding: '0', 
                    fontFamily: 'Fugaz One',
                    fontSize: 'calc(4vw + 4vh)', 
                    fontWeight: 'normal',
                    lineHeight: '8.8vh',
                    zIndex: '10',
                }}
            >
                Rubbish
            </h1>   

            <style>
                {`
                input::placeholder {
                    color: #4CA736; /* placeholder 색상 */
                }
                `}
            </style>

            {/* 입력 필드와 버튼을 포함한 폼 */}
            <form 
                style={{
                    position: 'absolute',
                    height: '100vh',
                    width: '76.3vw', 
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    position: 'relative',
                }}
            >
                {/* 이름 입력 필드 */}
                <input
                    type="text"
                    placeholder="이름을 입력해주세요"
                    value={name}
                    onInput={(e) => setName(e.target.value)} // 상태 업데이트
                    style={{
                        position: 'absolute',
                        top: '40.1vh',
                        width: '100%',
                        height: '5.6vh', 
                        padding: '0 14px',
                        borderRadius: '6px',
                        backgroundColor: '#fff',
                        border: '1px solid #4CA736', 
                        color: '#4CA736', 
                        fontSize: '2vh', 
                        fontWeight: '400',
                        boxSizing: 'border-box',
                    }}
                />

                {/* 아이디 입력 필드와 중복확인 버튼 */}
                <div style={{ position: 'absolute', top: '48.0vh', width: '100%' }}>
                    <input
                        type="text"
                        placeholder="아이디를 입력해주세요"
                        value={username}
                        onInput={(e) => setUsername(e.target.value)} // 상태 업데이트
                        style={{
                            width: '100%',
                            height: '5.6vh', 
                            padding: '0 14px',
                            borderRadius: '6px',
                            backgroundColor: '#fff',
                            border: '1px solid #4CA736', 
                            color: '#4CA736', 
                            fontSize: '2vh', 
                            fontWeight: '400',
                            boxSizing: 'border-box',
                        }}
                    />
                    {/* selectedIcon 이미지 */}
                    <img 
                        src={selectedIcon} 
                        alt="아이디 확인 아이콘" 
                        style={{
                            position: 'absolute',
                            top: '50%',
                            right: '26%',
                            transform: 'translateY(-50%)', // 아이콘을 수직 가운데 정렬
                            width: '16px', // 아이콘 크기
                            height: '16px', // 아이콘 크기
                        }}
                    />
                    <button
                        type="button" // 버튼을 눌렀을 때 username 중복 확인
                        onClick={checkUsername}
                        style={{
                            position: 'absolute',
                            right: '4.7%',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '15.3vw',  
                            height: '3.1vh', 
                            padding: '0px 0px',
                            borderRadius: '6px',
                            backgroundColor: '#4CA736', 
                            color: '#fff',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '1.5vh', 
                            fontWeight: '400',
                        }}
                    >
                        중복확인
                    </button>
                </div>

                {/* 비밀번호 입력 필드 */}
                <input
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                    value={password}
                    onInput={(e) => setPassword(e.target.value)} // 상태 업데이트
                    style={{
                        position: 'absolute',
                        top: '55.9vh',
                        width: '100%',
                        height: '5.6vh', 
                        padding: '0 14px',
                        borderRadius: '6px',
                        backgroundColor: '#fff',
                        border: '1px solid #4CA736', 
                        color: '#4CA736', 
                        fontSize: '2vh', 
                        fontWeight: '400',
                        boxSizing: 'border-box',
                    }}
                />

                {/* 전화번호 입력 필드와 인증 버튼 */}
                <div style={{ position: 'absolute', top: '63.7vh', width: '100%' }}>
                    <input
                        type="tel"
                        placeholder="전화번호를 입력해주세요"
                        value={phoneNumber}
                        onInput={(e) => setPhoneNumber(e.target.value)} // 상태 업데이트
                        style={{
                            width: '100%',
                            height: '5.6vh', 
                            padding: '0 14px',
                            borderRadius: '6px',
                            backgroundColor: '#fff',
                            border: '1px solid #4CA736', 
                            color: '#4CA736', 
                            fontSize: '2vh', 
                            fontWeight: '400',
                            boxSizing: 'border-box',
                        }}
                    />
                    <button
                        style={{
                            position: 'absolute',
                            top: '50%',
                            right: '4.7%',
                            transform: 'translateY(-50%)',
                            width: '10.2vw',  
                            height: '3.1vh', 
                            padding: '0px 0px',
                            borderRadius: '6px',
                            backgroundColor: '#4CA736', 
                            color: '#fff',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '1.5vh', 
                            fontWeight: '400',
                        }}
                    >
                        인증
                    </button>
                </div>

                {/* 인증번호 입력 필드 추가 */}
                <div style={{position:'absolute', top:'71.5vh',height:'5.6vh', width:'100%'}}>
                    <input
                        type="text"
                        placeholder="인증번호를 입력해주세요"
                        value={verificationCode}
                        onInput={(e) => setVerificationCode(e.target.value)} // 상태 업데이트
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%', 
                            padding: '0 14px',
                            borderRadius: '6px',
                            backgroundColor: '#fff',
                            border: '1px solid #4CA736', 
                            color: '#4CA736', 
                            fontSize: '2vh', 
                            fontWeight: '400',
                            boxSizing: 'border-box',
                        }}
                    />
                    {/* selectedIcon 이미지 */}
                    <img 
                        src={selectedIcon} 
                        alt="인증번호 확인 아이콘" 
                        style={{
                            position: 'absolute',
                            top: '50%',
                            right: '4.7%',
                            transform: 'translateY(-50%)', // 아이콘을 수직 가운데 정렬
                            width: '16px', // 아이콘 크기
                            height: '16px', // 아이콘 크기
                        }}
                    />
                </div>

                {/* 다음으로 버튼 */}
                <button
                    type="submit"
                    style={{
                        position: 'absolute',
                        top: '91.9vh',
                        width: '100%',
                        height: '5.6vh', 
                        padding: '0 14px',
                        borderRadius: '6px',
                        backgroundColor: '#9F9F9F',
                        color: '#fff',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '2vh', 
                        fontWeight: '400',
                    }}
                    onClick={() => printValue()}
                >
                    다음으로
                </button>
            </form>
        </div>
    );
};

export default SignUpPage;
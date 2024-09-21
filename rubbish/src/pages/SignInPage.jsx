import React from 'react';
import '../fonts.css';

const SignInPage = () => {
    return (<div
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
                top: '31.1vh', 
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

        {/* 입력 필드와 버튼을 포함한 폼 */}
        <form 
            style={{
                position:'absolute',
                height:'100vh',
                width: '76.3%', 
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
                style={{
                    position:'absolute',
                    top: '46.2vh',
                    width: '100%',
                    height: '5.6vh', // 높이에 맞춘 반응형 높이
                    padding: '0 14px',
                    borderRadius: '6px',
                    backgroundColor: '#fff',
                    border: '1px solid #4CA736', // 테두리 색상 #4CA736
                    color: '#4CA736', // 텍스트 색상 #4CA736
                    fontSize: '2vh', // 반응형 글씨 크기
                    fontWeight: '400',
                    boxSizing: 'border-box',
                }}
            />

            <style>
                {`
                input::placeholder {
                    color: #4CA736; /* placeholder 색상 */
                }
                `}
            </style>

            {/* 비밀번호 입력 필드 */}
            <input
                type="password"
                placeholder="비밀번호를 입력해주세요"
                style={{
                    position:'absolute',
                    top: '54.0vh',
                    width: '100%',
                    height: '5.6vh', // 높이에 맞춘 반응형 높이
                    padding: '0 14px',
                    borderRadius: '6px',
                    backgroundColor: '#fff',
                    border: '1px solid #4CA736', // 테두리 색상 #4CA736
                    color: '#4CA736', // 텍스트 색상 #4CA736
                    fontSize: '2vh', // 반응형 글씨 크기
                    fontWeight: '400',
                    boxSizing: 'border-box',
                }}
            />


            {/* 다음으로 버튼 */}
            <button
                type="submit"
                style={{
                    
                    position:'absolute',
                    top: '91.9vh',
                    width: '100%',
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
                다음으로
            </button>
        </form>
        </div>
    );
};

export default SignInPage;
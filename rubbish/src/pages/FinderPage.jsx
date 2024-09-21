import React, { useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from 'react-router-dom';

const FinderPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
        <div>
            
        </div>
      <Footer 
        buttonText="제보하기" 
        buttonColor="#4CAF50"
      />
    </div>
  );
};

export default FinderPage;

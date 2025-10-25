import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Logo.css'

export default function Logo({ logoUrl }) {
  const navigate = useNavigate(); // get the navigation function

  const goToHome = () => {
    navigate('/'); // navigate to /about route
  };

  return (
    <h1 className='Logo' onClick={goToHome}>
        <img src={logoUrl} className='logo-img' />
        <span className='logo-text'> codeworld </span>
    </h1>
  )
}

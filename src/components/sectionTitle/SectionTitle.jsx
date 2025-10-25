import React from 'react';
import './SectionTitle.css';

export default function SectionTitle({ title, iconPosition, iconUrl }) {
  return (
    <a href='#'>  
      {iconPosition === 'right' ? (
        <h6 className='section-title'>
          <span> {title} </span> 
          <img src={iconUrl} alt="title icon" /> 
        </h6>
      ) : (
        <h6 className='section-title'>
          <img src={iconUrl} alt="title icon" /> 
          <span> {title} </span> 
        </h6>
      )}
    </a>
  )
}

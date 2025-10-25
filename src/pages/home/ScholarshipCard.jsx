import React from 'react';
import './Scholarships.css';
import arrowUrl from '../../assets/icons/title-arrow.svg';

export default function ScholarshipCard({ title, description, iconUrl }) {
  return (
    <div className='ScholarshipCard'>
        <div className="icons">
            <img src={iconUrl} alt="icon" />
            <img src={arrowUrl} alt="icon" />
        </div>

        <div className="scholar-content">
            <h6 className="scholar-title"> {title} </h6>
            <p className="scholar-description"> {description} </p>
        </div>
    </div>
  )
}

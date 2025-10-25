import React from 'react';
import './AboutBanner.css';

import icon1 from '../../assets/icons/about-banner.svg';
import icon2 from '../../assets/icons/about-banner2.svg';

export default function AboutBanner() {
  return (
    <section className='AboutBanner'>
        <div className="section-wrapper">
            <div className="icon1">
                <img src={icon1} alt="icon" />
            </div>
            <div className="icon2">
                <img src={icon2} alt="icon" />
            </div>
            <h1 className="title">
                <span> Code </span>
                <span> World </span>
            </h1>
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="circle4"></div>
            <div className="circle5"></div>
        </div>
    </section>
  )
}

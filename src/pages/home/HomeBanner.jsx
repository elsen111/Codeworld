import React from 'react';
import './HomeBanner.css';
import LinkButton from '../../components/header/LinkButton';

export default function HomeBanner() {
  return (
    <section className='home-banner'>
      <div className="section-wrapper">
        <div className="content">
          <p className="title-text">
            Bizimlə təhsildə yeniliyə doğru addım at!
          </p>

          <div className="courses">
            <p className="courses-title">
              Axtardığın ixtisaslar burada
            </p>
            <div className="course">
              <span> Qrafik Dizayn </span>
              <span> UX/UI Dizayn </span>
              <span> Frontend Proqramlaşdırma </span>
              <span> Backend Proqramlaşdırma </span>
              <span> Data Analitika </span>
            </div>
          </div>
        </div>

        <LinkButton content="Bizə qoşul" className="section-btn" />
      </div>
    </section>
  )
}

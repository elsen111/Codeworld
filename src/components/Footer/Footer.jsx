import React from 'react';
import './Footer.css';
import Logo from '../logo/Logo.jsx';
import logoUrl from '../../assets/icons/logo_white.svg';
import linkedinLogo from '../../assets/icons/linkedin.svg';
import instagramLogo from '../../assets/icons/instagram.svg';
import facebookLogo from '../../assets/icons/facebook.svg';

export default function Footer() {
  return (
    <footer className="Footer">
        <div className="section-wrapper">
            <div className="first-row">
                <Logo logoUrl={logoUrl} />

                <div className="courses">
                  <h6> İxtisaslar </h6>
                  <div className="links">
                    <a href=""> Qrafik Dizayn </a>
                    <a href=""> UI/UX Dizayn </a>
                    <a href=""> Frontend </a>
                    <a href=""> Backend </a>
                    <a href=""> Data Analitika </a>
                    <a href=""> QA </a>
                  </div>
                </div>
            </div>

            <div className="second-row">
              <div className="social-links">
                <a href="#">
                  <img src={linkedinLogo} alt="linkedin" />
                </a>
                <a href="#">
                  <img src={instagramLogo} alt="instagram" />
                </a>
                <a href="#">
                  <img src={facebookLogo} alt="facebook" />
                </a>
              </div>

              <div className="other">
                  <h6> Digər </h6>
                  <div className="other-links">
                    <a href=""> Məxfilik </a>
                    <a href=""> Bizimlə əlaqə </a>
                  </div>
              </div>
            </div>
        </div>
    </footer>
  )
}

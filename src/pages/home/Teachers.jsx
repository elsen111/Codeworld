import React from 'react';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import Carousel from './TeachersCarousel.jsx';
import arrowUrl from '../../assets/icons/title-arrow.svg';

export default function 
() {
  return (
    <section className='Teachers'>
        <div className="section-wrapper">
            <SectionTitle
                title = 'Müəllimlərimiz'
                iconPosition='right' 
                iconUrl={arrowUrl} 
            />

            <Carousel />
        </div>
    </section>
  )
}

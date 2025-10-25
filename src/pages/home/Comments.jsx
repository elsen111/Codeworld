import React from 'react';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import CommentsCarousel from './CommentsCarousel';

import arrowUrl from '../../assets/icons/title-arrow.svg';
import studentImgUrl from '../../assets/img/student.png';
import './Comments.css';

export default function () {
  return (
    <section className="Comments">
        <div className="section-wrapper">
            <SectionTitle
                title = 'Tələbələrimizin rəyləri'
                iconPosition='right' 
                iconUrl={arrowUrl} 
            />

            <div>
                <div className="student-img">
                    <img src={studentImgUrl} alt="student image" className='image' />
                </div>

                <CommentsCarousel />
            </div>
        </div>
    </section>
  )
}

import React from 'react';
import './CourseCard.css';
import line from '../../assets/icons/curve-line.svg';
import arrowUrl from '../../assets/icons/title-arrow.svg';

export default function CourseCard({ courseName, courseIconUrl, contentTitle, description}) {
  return (
    <div className='CourseCard'>
      <div className="card-title">
        <h6> {courseName} </h6>
        <img src={courseIconUrl} alt="icon" />
      </div>

      <div className="course-card-content">
        <div className="text">
          <div>
            <h6> {contentTitle} </h6>
            <p> {description} </p>
          </div>
          <img src={arrowUrl} alt="icon" />
        </div>
        <div className="curve-line">
          <img src={line} alt="line" />
        </div>
      </div>
    </div>
  )
}

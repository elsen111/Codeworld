import React from 'react';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import CourseCard from './CourseCard';
import arrowUrl from '../../assets/icons/title-arrow.svg';
import './Courses.css';
import CourseIcon1 from '../../assets/icons/course1.svg';
import CourseIcon2 from '../../assets/icons/course2.svg';
import CourseIcon3 from '../../assets/icons/course3.svg';
import CourseIcon4 from '../../assets/icons/course4.svg';
import CourseIcon5 from '../../assets/icons/course5.svg';
import CourseIcon6 from '../../assets/icons/course6.svg';

export default function 
() {
  return (
    <section className="Courses">
      <div className="section-wrapper">
        <SectionTitle 
          title='Kurslarımız' 
          iconPosition='right' 
          iconUrl={arrowUrl} 
        />
        
        <div className="course-cards-wrapper">
          <CourseCard 
            courseName='Qrafik Dizayn' 
            courseIconUrl={CourseIcon1}
            contentTitle='Adobe Photoshop / Illustrator'
            description='Lorem ipsum dolor sit amet consectetur adipiscing'
          />

          <CourseCard 
            courseName='UX/UI Dizayn' 
            courseIconUrl={CourseIcon2}
            contentTitle='Adobe Photoshop / Illustrator'
            description='Lorem ipsum dolor sit amet consectetur adipiscing'
          />

          <CourseCard 
            courseName='Frontend' 
            courseIconUrl={CourseIcon3}
            contentTitle='Adobe Photoshop / Illustrator'
            description='Lorem ipsum dolor sit amet consectetur adipiscing'
          />

          <CourseCard 
            courseName='Backend' 
            courseIconUrl={CourseIcon4}
            contentTitle='Adobe Photoshop / Illustrator'
            description='Lorem ipsum dolor sit amet consectetur adipiscing'
          />

          <CourseCard 
            courseName='Data Analitika' 
            courseIconUrl={CourseIcon5}
            contentTitle='Adobe Photoshop / Illustrator'
            description='Lorem ipsum dolor sit amet consectetur adipiscing'
          />

          <CourseCard 
            courseName='QA' 
            courseIconUrl={CourseIcon6}
            contentTitle='Adobe Photoshop / Illustrator'
            description='Lorem ipsum dolor sit amet consectetur adipiscing'
          />
        </div>
      </div>
    </section>
  )
}

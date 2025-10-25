import React from 'react';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import ScholarshipCard from './ScholarshipCard';
import LinkButton from '../../components/header/LinkButton';

import arrowUrl from '../../assets/icons/title-arrow.svg';
import './Scholarships.css';
import line from '../../assets/icons/curve-line-big.svg';
import iconUrl from '../../assets/icons/course2.svg';


export default function Scholarships() {
  return (
    <section className="Scholarships">
        <div className="section-wrapper">
            <SectionTitle
                title = 'Təqaüdlər'
                iconPosition='right' 
                iconUrl={arrowUrl} 
            />

            <div>
                <div className="curve-line">
                    <img src={line} alt="line" />
                </div>

                <div className="scholar-cards-container">
                    <ScholarshipCard
                        title='Akademik Təqaüd'
                        description= 'Yüksək nəticə göstərən və tədrisdə fəallığı ilə seçilən tələbələrə təqdim olunur.'
                        iconUrl={iconUrl}
                    />

                    <ScholarshipCard
                        title='Sosial Dəstək Təqaüdü'
                        description= 'Maddi imkanı məhdud olan, lakin öyrənmək həvəsi güclü olan tələbələr üçün nəzərdə tutulub.'
                        iconUrl={iconUrl}
                    />

                    <ScholarshipCard
                        title='Erkən Qeydiyyat Endirimi'
                        description= 'Semestr başlamazdan əvvəl qeydiyyatdan keçən tələbələr üçün xüsusi endirimlər tətbiq olunur.'
                        iconUrl={iconUrl}
                    />

                    <ScholarshipCard
                        title='Qızlar üçün IT Dəstəyi Proqramı'
                        description= 'Texnologiya və dizayn sahəsində təhsil alan xanım tələbələr üçün qismən təqaüd imkanı yaradır.'
                        iconUrl={iconUrl}
                    />
                </div>

                <div className="curve-line">
                    <img src={line} alt="line" />
                    <LinkButton 
                        content = 'İndi müraciət et'
                        className='section-btn'
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

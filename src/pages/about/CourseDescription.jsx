import React from 'react';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import icon from '../../assets/icons/course-desc.svg';
import './CourseDescription.css';
import imgUrl from '../../assets/img/course-desc.jpg';

export default function CourseDescription() {
  return (
    <section className="CourseDesc">
        <div className="section-wrapper about-page-section">
            <div className="content">
                <SectionTitle 
                    title='Biz Kimik?'
                    iconPosition='left'
                    iconUrl={icon}
                />

                <div className="text">
                    Academy — gənclərin və mütəxəssislərin gələcəyə doğru addım atdıqları bir təhsil mərkəzidir. Burada biz yalnız dərs keçmirik, biz bilik, yaradıcılıq və inam mühitini formalaşdırırıq.
                    <br/>
                    Təhsil mərkəzimiz proqramlaşdırma, dizayn və şəbəkə kimi müasir texnoloji istiqamətlərdə praktiki bacarıqlar qazandırmaq məqsədi ilə yaradılmışdır. Biz inanırıq ki, hər bir tələbə doğru istiqamət, düzgün təlim və motivasiya ilə öz potensialını kəşf edə bilər.
                </div>
            </div>

            <div className="desc-image">
                <img src={imgUrl} alt="image" />
            </div>
        </div>
    </section>
  )
}

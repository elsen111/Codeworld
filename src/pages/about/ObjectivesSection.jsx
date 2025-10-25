import React from 'react';
import MissionCard from './MissionCard';
import './ObjectivesSection.css';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import icon from '../../assets/icons/objectives.svg';
import cardImg1 from '../../assets/img/mission-card.jpg';
import cardImg2 from '../../assets/img/mission-card.jpg';


export default function ObjectivesSection() {
  const missions = [
    {
        imgUrl: cardImg1,
        missionDetails: [
            'Təhsili hər kəs üçün əlçatan etmək',
            'Real layihələr üzərində praktiki öyrənmə təmin etmək',
            'Gəncləri rəqəmsal dövrün tələblərinə uyğun hazırlamaq',
            'Qlobal düşünən yerli mütəxəssislər formalaşdırmaq'
        ]
    },

    {
        imgUrl: cardImg1,
        missionDetails: [
            'Təhsili hər kəs üçün əlçatan etmək',
            'Real layihələr üzərində praktiki öyrənmə təmin etmək',
            'Gəncləri rəqəmsal dövrün tələblərinə uyğun hazırlamaq',
            'Qlobal düşünən yerli mütəxəssislər formalaşdırmaq'
        ]
    }
]


  return (
    <section className="ObjectivesSection">
        <div className="section-wrapper about-page-section">
            <SectionTitle
                title='Missiyamız və Məqsədlərimiz'
                iconPosition='left'
                iconUrl={icon}
            />
            <div className="content">
                {missions.map((mission, index) => 
                    <MissionCard 
                        key = {index}
                        list = {mission.missionDetails}
                        imgUrl = {mission.imgUrl}
                    />
                    )
                }
            </div>
        </div>
    </section>
  )
}

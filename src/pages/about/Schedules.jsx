import React from 'react';
import './Schedules.css';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import ScheduleCard from './ScheduleCard';

import icon from '../../assets/icons/schedule.svg';
import icon1 from '../../assets/icons/chronology.svg';
import icon2 from '../../assets/icons/chronology.svg';
import icon3 from '../../assets/icons/chronology.svg';
import image1 from '../../assets/img/schedule.jpg';
import image2 from '../../assets/img/schedule.jpg';
import image3 from '../../assets/img/schedule.jpg';


export default function Schedules() {
    const schedules = [
        {
            icon: icon1,
            time: 'Səhər növbəsi',
            image: image1,
            hourInterval: '09:00 - 13:00',
            description: 'Fərdi və qrup dərsləri üçün rahat və motivasiyaedici mühit.'
        },

        {
            icon: icon2,
            time: 'Axşam növbəsi',
            image: image2,
            hourInterval: '18:00 - 22:00',
            description: 'İşləyən tələbələr üçün çevik cədvəl və online qoşulma imkanı.'
        },

        {
            icon: icon3,
            time: 'Həftəsonu',
            image: image3,
            hourInterval: '10:00 - 18:00',
            description: 'Şənbə və Bazar günləri – layihə əsaslı təlimlər və masterklasslar.'
        }
    ]

  return (
    <div className="Schedules">
        <div className="section-wrapper about-page-section">
            <SectionTitle 
                title='Dərs Saatlarımız'
                iconPosition='left'
                iconUrl={icon}
            />

            <div className="schedule-cards-wrapper">
                {schedules.map((schedule, index) => {
                    return (
                        <ScheduleCard
                            key={index}
                            icon = {schedule.icon}
                            time = {schedule.time}
                            image = {schedule.image}
                            hours = {schedule.hourInterval}
                            description = {schedule.description}
                        />
                    )
                })}
            </div>
        </div>
    </div>
  )
}

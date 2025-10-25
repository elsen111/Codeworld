import React from 'react';
import SectionTitle from '../../components/sectionTitle/SectionTitle';

import './Schedules.css';

export default function ScheduleCard({ icon, time, image, hours, description }) {
  return (
    <div className="schedule-card">
        <SectionTitle 
            title={time}
            iconPosition='left'
            iconUrl={icon}
        />

        <div className="schedule-img">
            <img src={image} alt="image" />
        </div>

        <p className="hour-interval"> {hours} </p>
        <p className="description"> {description} </p>
    </div>
  )
}

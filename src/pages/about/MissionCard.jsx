import React from 'react';
import icon from '../../assets/icons/mission-card.svg';
import './MissionCard.css';

export default function MissionCard({ list, imgUrl }) {
  return (
    <div className="missionCard">
        <div className="content">
            <ul className="mission-list">
                {
                    list.map(item => <li key={item}> {item} </li>)
                }
            </ul>
        </div>
        <div className="img">
            <img src={imgUrl} alt="image" />
        </div>
        <div className="icon">
            <img src={icon} alt="image" />
        </div>
    </div>
  )
}

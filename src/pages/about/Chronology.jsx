import React from 'react';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import './Chronology.css';
import icon from '../../assets/icons/chronology.svg';

export default function Chronology() {
    const events = [
        {
            year: "2018",
            text: "Akademiyanın əsası qoyuldu, ilk kurs – Proqramlaşdırma üzrə başladı.",
            pos: 'bottom'
        },
        {
            year: "2019",
            text: "100-dən çox tələbə məzun oldu; Dizayn və Şəbəkə kursları əlavə edildi.",
            pos: 'top'
        },
        {
            year: "2021",
            text: "Akademiya beynəlxalq mütəxəssislərlə əməkdaşlığa başladı.",
            pos: 'bottom'
        },
        {
            year: "2023",
            text: "Onlayn dərs platformamız istifadəyə verildi.",
            pos: 'top'
        },
        {
            year: "2025",
            text: "1000+ uğurlu məzun, 10-dan çox partnyor şirkətlə əməkdaşlıq.",
            pos: 'bottom'
        }
    ];

  return (
    <section className='ChronologySection'>
        <div className="section-wrapper">
            <SectionTitle 
                title='Tarixçəmiz - Bizim yolumuz'
                iconPosition='left'
                iconUrl={icon}
            />

            <section className="chronology">
                <div className="timeline">
                    {events.map((e, i) => (
                    <div className={`timeline-item ${e.pos}`} key={i}>
                        {/* vertical connector from main line */}
                        <div className="connector" />
                        {/* small horizontal stub attached to the connector */}
                        <div className="stub" />
                        {/* the dot sits on the main backbone */}
                        <div className="dot" />
                        {/* content */}
                        <div className="content">
                        <div className="year">{e.year}</div>
                        <div className="desc">{e.text}</div>
                        </div>
                    </div>
                    ))}
                </div>
            </section>
        </div>
    </section>
  )
}

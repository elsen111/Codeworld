import React from 'react';
import Header from '../../components/header/Header.jsx';
import AboutBanner from './AboutBanner.jsx';
import CourseDescription from './CourseDescription.jsx';
import ObjectivesSection from './ObjectivesSection.jsx';
import Team from './Team.jsx';
import './About.css';

export default function About() {
  return (
    <>
      <AboutBanner />
      <CourseDescription />
      <ObjectivesSection />
      <Team />
    </>
  )
}
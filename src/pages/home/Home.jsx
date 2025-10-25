import React from 'react';
import Header from '../../components/header/Header.jsx';
import HomeBanner from './HomeBanner.jsx';
import Courses from './Courses.jsx';
import Teachers from './Teachers.jsx';
import Scholarships from './Scholarships.jsx';
import Comments from './Comments.jsx';
import Footer from '../../components/Footer/Footer.jsx';


export default function Home() {
  return (
    <>
          <HomeBanner />
          <Courses />
          <Teachers />
          <Scholarships />
          <Comments />
    </>
  )
}
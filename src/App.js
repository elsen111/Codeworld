import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/layout/Layout.jsx';
import Departments from './pages/departments/Departments.jsx';
import Scholarships from './pages/scholarships/Scolarships.jsx';
import Contact from './pages/contact/Contact.jsx';
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';

import './App.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="departments" element={<Departments />} />
        <Route path="scholarships" element={<Scholarships />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
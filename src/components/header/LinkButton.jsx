import React from 'react';
import { NavLink } from 'react-router-dom';
import './LinkButton.css';

export default function LinkButton({ content, className }) {
  return (
    <div className={`link-btn ${className ? className : ''}`}>
      {content}
    </div>
  )
}
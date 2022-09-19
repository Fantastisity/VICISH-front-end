import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button2() {
  return (
    <Link to='find-event'>
      <button className='btn2'>Start Explore</button>
    </Link>
  );
}

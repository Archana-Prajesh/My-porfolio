// src/components/RippleBanner.jsx
import React, { useRef, useEffect } from 'react';
import Header from './Header';
import './Banner.css';

export default function Simplebnr() {
  return (
    <div className="ripple-banner">
      <Header />
      <div className="banner-content">
        <h1>Hi, I am <span className="highlight">Archana Prajesh</span></h1>
        <p>I am a frontend web developer. I can provide clean code and pixel perfect design.</p>
            <p>I also make website more & more interactive with web animations.</p>
      </div>
    </div>
  );
}

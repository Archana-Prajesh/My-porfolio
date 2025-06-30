import React from 'react';


export default function Header() {
  return (
    <header className="header">
      <div className="logo"><img class="logo-image" src="/Image.png" alt="My Image" /></div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#skills">Skills</a>
        <a href="#resume">Resume</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <div><span className="contact-number"><img class="phone-image" src="/download.svg" alt="phone" /> +1 971 234 1508</span></div>
    </header>
  );
}

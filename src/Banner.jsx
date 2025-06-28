// src/components/RippleBanner.jsx
import React, { useRef, useEffect } from 'react';
import Header from './Header';
import './Banner.css';

export default function Banner() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.scale(dpr, dpr);

    const bubbles = [];

    // Bubble class
    class Bubble {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * window.innerWidth;
        this.y = window.innerHeight + Math.random() * 100;
        this.radius = 2 + Math.random() * 4;
        this.speed = 0.5 + Math.random() * 1.5;
        this.alpha = 0.2 + Math.random() * 0.5;
      }

      update() {
        this.y -= this.speed;
        if (this.y < -this.radius) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.fill();
      }
    }

    // Create initial bubbles
    for (let i = 0; i < 100; i++) {
      bubbles.push(new Bubble());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      bubbles.forEach((bubble) => {
        bubble.update();
        bubble.draw();
      });
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="ripple-banner">
      <Header />
      <canvas ref={canvasRef} className="ripple-canvas" />
      <div className="banner-content">
        <h1>Hi, I am <span className="highlight">Archana Prajesh</span></h1>
        <p>I am a frontend web developer. I can provide clean code and pixel perfect design.</p>
            <p>I also make website more & more interactive with web animations.</p>
      </div>
    </div>
  );
}

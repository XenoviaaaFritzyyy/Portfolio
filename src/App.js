import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Facebook, Github, Mail, MessageCircle, Instagram, BookOpen, Gamepad2, Radio, Linkedin } from 'lucide-react';
import Navbar from './components/navbar';
import ConstellationBackground from './components/ConstellationBackground';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ConstellationBackground />
        
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector('.about-section');
      const offset = window.innerHeight; // How far down the page we need to scroll to reveal
      const aboutSectionTop = aboutSection.getBoundingClientRect().top;

      if (aboutSectionTop < offset) {
        setIsAboutVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="content-wrapper">
      <main className="main-content">
        <div className="avatar">
          <img src="/profile.jpg" alt="Profile Picture" />
        </div>

        <h1 className="hero-title">Fritz Abrea</h1>
        <p className="subtitle">Student Programmer</p>

        <div className="social-links">
          <a href="https://github.com/XenoviaaaFritzyyy" aria-label="GitHub"><Github /></a>
          <a href="https://www.facebook.com/fritz.abrea/" aria-label="Facebook"><Facebook /></a>
          {/* <a href="https://mastodon.social" aria-label="Mastodon"><Radio /></a> */}
          <a href="https://discordapp.com/users/600214806364028948" aria-label="Discord"><MessageCircle /></a>
          {/* <a href="https://medium.com" aria-label="Medium"><BookOpen /></a> */}
          <a href="https://www.instagram.com/fffrritzyy/" aria-label="Instagram"><Instagram /></a>
          <a href="https://www.linkedin.com/in/fritz-abrea-4b9246331/" aria-label="LinkedIn"><Linkedin /></a>
          {/* <a href="https://twitch.tv" aria-label="Twitch"><Gamepad2 /></a> */}
          <a href="mailto:fritzabrea32@gmail.com" aria-label="Email"><Mail /></a>
        </div>
      </main>

      <div className={`about-section ${isAboutVisible ? 'visible' : 'hidden'}`}>
        <AboutSection />
      </div>

      <PortfolioSection />
    </div>
  );
}

function Blog() {
  return (
    <main className="main-content">
      <h2>Blog</h2>
      <p>Working on this section! Stay tuned for updates.</p>
    </main>
  );
}

function CV() {
  return (
    <main className="main-content">
      <div className="cv-container">
        {/* Add your CV content here */}
      </div>
      <p>Working on this section! Stay tuned for updates.</p>
    </main>
  );
}

export default App;
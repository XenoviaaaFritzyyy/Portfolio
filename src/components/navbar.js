import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Mail, MessageCircle, Instagram, BookOpen, Gamepad2, Radio } from 'lucide-react';
// import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">Fritz Abrea</Link>
      <div className="nav-links">
        <Link to="/">HOME</Link>
        <Link to="/blog">BLOG</Link>
        <Link to="/cv">CV</Link>
        <Link to="/cv">CV</Link>
      </div>
    </nav>
  );
}

export default Navbar;
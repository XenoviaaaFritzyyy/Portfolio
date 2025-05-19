import React, { useRef, useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const PortfolioSection = () => {
  const projects = [
    {
      title: 'InvestTrack',
      description: 'InvestTrack is a user-friendly platform connecting startups and investors, simplifying funding and investment management. Startups can create funding rounds and manage equity, while investors explore opportunities and track investments. It streamlines decision-making with efficient tools for financial management and investor relations.',
      color: '#0D6EFD',
      visitUrl: 'https://investtrack-ten.vercel.app/',
    //logo: '/New.png',
    },
    {
      title: 'Pokedex',
      description: 'Pokedex is a personal project developed during my free time. It is a simple yet interactive web application that allows users to search for Pokémon by name and view detailed information about each one. The app features a clean and user-friendly interface, making it easy to explore the Pokémon universe and discover new creatures.',
      color: '#E53935',
      visitUrl: 'https://pokemon-pokedex-lac.vercel.app/',
    },
    {
      title: 'Travel Authority',
      description: 'Travel Authority is a web application developed by our team of three interns during our On-the-Job Training (OJT) at the Department of Education – Cebu Province Division. I led the development as the full-stack developer, taking charge of both the frontend and backend implementation. The system is designed to digitize the travel request process for teachers, enabling them to submit and manage requests efficiently in a fully paperless environment. This project improved administrative workflows and minimized manual paperwork through a streamlined digital solution.',
      color: '#29B6F6',
      visitUrl: 'http://122.3.195.244:85/',
    },
    {
      title: 'Pet Society',
      description: 'Pet Society is a pet management app built with ReactJS, Spring Boot, and MySQL. It allows pet owners to manage profiles, appointments, medical records, and adoption services in a user-friendly platform.',
      color: '#8D6E63',
      visitUrl: '',
    },
    {
      title: 'Budget Pro',
      description: 'BudgetPro is a budgeting and financial management tool designed to help users track expenses, create budgets, and gain better control over their finances. Built with user-friendly features, it allows individuals to monitor spending, set financial goals, and ensure a streamlined approach to personal finance management.',
      color: '#2C3E8F',
      visitUrl: '',
    },
  ];

  const cardRefs = useRef([]);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-index'));
            setVisibleCards((prev) => (prev.includes(idx) ? prev : [...prev, idx]));
          }
        });
      },
      { threshold: 0.2 }
    );
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="portfolio-section">
      <div className="container">
        <h2>Portfolio</h2>
        <h3>My top projects</h3>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              visible={visibleCards.includes(index)}
              ref={el => (cardRefs.current[index] = el)}
              data-index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
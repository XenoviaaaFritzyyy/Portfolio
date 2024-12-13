import React from 'react';
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
      title: 'Pet Society',
      description: 'Pet Society is a pet management app built with ReactJS, Spring Boot, and MySQL. It allows pet owners to manage profiles, appointments, medical records, and adoption services in a user-friendly platform.',
      color: '#DC3545',
      visitUrl: '',
    },
    {
      title: 'Budget Pro',
      description: 'BudgetPro is a budgeting and financial management tool designed to help users track expenses, create budgets, and gain better control over their finances. Built with user-friendly features, it allows individuals to monitor spending, set financial goals, and ensure a streamlined approach to personal finance management.',
      color: '#2C3E8F',
      visitUrl: '',
    },
  ];

  return (
    <section className="portfolio-section">
      <div className="container">
        <h2>Portfolio</h2>
        <h3>My top projects</h3>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
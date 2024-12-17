import React from 'react';
import { Shield } from 'lucide-react';

const TimelineSection = () => {
  const timelineEvents = [
    {
      id: 1,
      title: "University Tech Talk With Flexisource IT 2024",
      subtitle: "Explore exciting career opportunities in 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲 𝐚𝐧𝐝 𝐂𝐨𝐦𝐩𝐮𝐭𝐞𝐫 𝐒𝐜𝐢𝐞𝐧𝐜𝐞, with discussions on 𝐈𝐓 𝐁𝐮𝐬𝐢𝐧𝐞𝐬𝐬 𝐀𝐧𝐚𝐥𝐲𝐬𝐢𝐬, 𝐂𝐲𝐛𝐞𝐫𝐬𝐞𝐜𝐮𝐫𝐢𝐭𝐲, 𝐚𝐧𝐝 𝐒𝐨𝐟𝐭𝐰𝐚𝐫𝐞 𝐐𝐀 𝐓𝐞𝐬𝐭𝐢𝐧𝐠.",
      date: "December 2024",
      description: "Since we were encouraged to attend this event to gain insights into emerging trends and career opportunities in Information Technology and Computer Science, it provided a valuable platform to connect with industry professionals, learn about various IT domains such as Business Analysis, Cybersecurity, and Software QA Testing, and explore how these fields align with our future career aspirations.",
    },
    {
        id: 2,
        title: "Capstone Project Kickoff - InvestTrack",
        subtitle: "The start of our InvestTrack journey as a team.",
        date: "Febuary 2024",
        description: "This marked the beginning of our capstone project, InvestTrack. Alongside my classmates, we collaborated to design and develop an innovative system focused on investment and funding tracking. This project allowed us to apply our technical skills, foster teamwork, and address real-world problems. It became a defining moment in our academic journey and preparation for professional challenges.",
    },
    {
        id: 1,
        title: "App Development Journey - Pet Society",
        subtitle: "The beginning of our App Development subject in 3rd Year, 1st Semester",
        date: "September 2023",
        description: "This semester marked the start of our App Development course, where we were grouped into teams and tasked with creating an application. Using Spring Boot for the backend and React for the frontend, our team developed 'Pet Society,' a platform designed to connect pet owners and enthusiasts.",
      },
    // Add more timeline events as needed
  ];

  return (
    <section className="timeline-section">
      <div className="container">
        <h2 className="timeline-title">Timeline</h2>
        <div className="timeline">
          {timelineEvents.map(event => (
            <div key={event.id} className="timeline-event">
              <div className="timeline-content">
                <h3>{event.title}</h3>
                <h4>{event.subtitle}</h4>
                <p>
                  {event.description.split(event.linkText).map((text, index, array) => (
                    <React.Fragment key={index}>
                      {text}
                      {index < array.length - 1 && (
                        <a href={event.link} className="timeline-link">
                          {event.linkText}
                        </a>
                      )}
                    </React.Fragment>
                  ))}
                </p>
              </div>
              <div className="timeline-line" />
              <div className="timeline-marker">
                <div className="timeline-icon">
                  <Shield className="h-6 w-6" />
                </div>
              </div>
              <div className="timeline-date">
                <span>{event.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
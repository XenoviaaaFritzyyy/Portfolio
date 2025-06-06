import React, { useRef, useState } from 'react';
import { Mail, MapPin, Globe, Github, Linkedin, GraduationCap, Briefcase, Code, Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function CV() {
    const cvRef = useRef(null);
    const [isPrinting, setIsPrinting] = useState(false);

    const exportPDF = async () => {
      const element = cvRef.current;
      if (!element) return;
  
      try {
        setIsPrinting(true);
        await new Promise(resolve => setTimeout(resolve, 100));

        const canvas = await html2canvas(element, {
          scale: 2,
          useCORS: true,
          logging: false,
          windowWidth: element.scrollWidth,
          windowHeight: element.scrollHeight,
          backgroundColor: '#ffffff'
        });

        const imgProps = {
          width: canvas.width,
          height: canvas.height
        };
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const pxPerMm = imgProps.width / pdfWidth;
        const pageHeightPx = Math.round(pdfHeight * pxPerMm);
        let renderedHeight = 0;
        let pageNum = 0;

        while (renderedHeight < imgProps.height) {
          const pageCanvas = document.createElement('canvas');
          pageCanvas.width = imgProps.width;
          const sliceHeight = Math.min(pageHeightPx, imgProps.height - renderedHeight);
          pageCanvas.height = sliceHeight;

          const ctx = pageCanvas.getContext('2d');
          ctx.fillStyle = '#fff';
          ctx.fillRect(0, 0, pageCanvas.width, pageCanvas.height);

          ctx.drawImage(
            canvas,
            0, renderedHeight, // source x, y
            imgProps.width, sliceHeight, // source w, h
            0, 0, // dest x, y
            imgProps.width, sliceHeight // dest w, h
          );

          const imgData = pageCanvas.toDataURL('image/png');
          if (pageNum > 0) pdf.addPage();
          pdf.addImage(
            imgData,
            'PNG',
            0,
            0,
            pdfWidth,
            (sliceHeight / pxPerMm)
          );
          renderedHeight += sliceHeight;
          pageNum++;
        }

        pdf.save('Fritz_Abrea_CV.pdf');
        setIsPrinting(false);
      } catch (error) {
        console.error('Error generating PDF:', error);
        alert('There was an error generating the PDF. Please try again.');
        setIsPrinting(false);
      }
    };

  return (
    <div className="cv-wrapper">
      <div className={`cv-container ${isPrinting ? 'printing' : ''}`} ref={cvRef}>
      <header className="cv-header">
        <h1>FRITZ ABREA</h1>
        <p>Student Programmer. Information Technology Student. Aspiring Developer.</p>
      </header>

      <div className="cv-content">
        <aside className="cv-sidebar">
          <section className="contact-section">
            <h2>CONTACT</h2>
            <ul className="contact-list">
              <li>
                <Mail className="icon" />
                <a href="mailto:fritzabrea32@gmail.com">fritzabrea32@gmail.com</a>
              </li>
              <li>
                <MapPin className="icon" />
                Cebu City, Philippines
              </li>
              <li>
                <Globe className="icon" />
                <a href="https://portfolio-puce-delta-80.vercel.app/">My personal portfolio</a>
              </li>
              <li>
                <Github className="icon" />
                <a href="https://github.com/XenoviaaaFritzyyy">@XenoviaaaFritzyyy</a>
              </li>
              <li>
                <Linkedin className="icon" />
                <a href="https://www.linkedin.com/in/fritz-abrea-4b9246331/">@fritz-abrea</a>
              </li>
            </ul>
          </section>

          <section className="skills-section">
            <h2>SKILLS</h2>
            <div className="skill-category">
              <h3>Programming</h3>
              <div className="skill-item">
                <span>ReactJS</span>
                <div className="skill-dots">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`dot ${i < 4 ? 'filled' : ''}`} />
                  ))}
                </div>
              </div>
              <div className="skill-item">
                <span>NestJS</span>
                <div className="skill-dots">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`dot ${i < 4 ? 'filled' : ''}`} />
                  ))}
                </div>
              </div>
              <div className="skill-item">
                <span>Python</span>
                <div className="skill-dots">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`dot ${i < 3 ? 'filled' : ''}`} />
                  ))}
                </div>
              </div>
              <div className="skill-item">
                <span>Java</span>
                <div className="skill-dots">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`dot ${i < 3 ? 'filled' : ''}`} />
                  ))}
                </div>
              </div>
              <div className="skill-item">
                <span>HTML/CSS</span>
                <div className="skill-dots">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`dot ${i < 4 ? 'filled' : ''}`} />
                  ))}
                </div>
              </div>
              <div className="skill-item">
                <span>Springboot</span>
                <div className="skill-dots">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`dot ${i < 2 ? 'filled' : ''}`} />
                  ))}
                </div>
              </div>
              <div className="skill-item">
                <span>Typescript</span>
                <div className="skill-dots">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`dot ${i < 4 ? 'filled' : ''}`} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </aside>

        <main className="cv-main">
          <section className="education-section">
            <h2>
              <GraduationCap className="icon" />
              EDUCATION
            </h2>
            <div className="education-item">
              <div className="education-header">
                <div className="education-period">2019 - 2021</div>
                <div className="education-location">St. Louise de Marillac College of Bogo</div>
              </div>
              <h3>Tecnical Vocational Livelihood - ICT</h3>
              <ul>
                {/* <li>Current GPA: 1.25</li> */}
                <li>Graduated: 2021</li>
                <li>Relevant coursework: Fundamental Programming and Basic Animation</li>
              </ul>
            </div>

            <div className="education-item">
              <div className="education-header">
                <div className="education-period">2021 - 2025</div>
                <div className="education-location">Cebu Institute of Technology - University</div>
              </div>
              <h3>Bachelor of Science in Information Technology</h3>
              <ul>
                {/* <li>Current GPA: 1.25</li> */}
                <li>Graduated: 2025</li>
                <li>Relevant coursework: Capstone, Mobile Dev, Object Oriented Programming,
                    Data Structures and Algorithms</li>
              </ul>
            </div>
          </section>

          <section className="experience-section">
            <h2>
              <Briefcase className="icon" />
              PROJECTS
            </h2>

            <div className="experience-item">
              <div className="experience-header">
                <div className="experience-period">2025</div>
                <div className="experience-location">Lahug, Cebu City, Cebu</div>
              </div>
              <h3>Travel Authority</h3>
              <h4>Full Stack Developer</h4>
              <p>Led the development of the Travel Authority system during my internship at the
                 Department of Education – Cebu Province Division. As the full-stack developer, 
                 I was responsible for both frontend and backend implementation. The application allows 
                 teachers to submit and manage travel requests digitally, streamlining administrative 
                 workflows in a paperless environment. I built the backend using NestJS and MySQL, 
                 and developed the frontend using ReactJS, ensuring smooth API integration and a 
                 user-friendly interface. The system enhanced operational efficiency and minimized 
                 manual paperwork across departments.
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <div className="experience-period">2024</div>
                <div className="experience-location">Personal Project</div>
              </div>
              <h3>Portfolio Website</h3>
              <h4>Front-end Developer</h4>
              <p>
                Developed a personal portfolio website using React and modern web technologies.
                Implemented responsive design and interactive elements to showcase projects and skills.
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <div className="experience-period">2024</div>
                <div className="experience-location">Cebu City, Cebu</div>
              </div>
              <h3>InvestTrack</h3>
              <h4>Full Stack Developer</h4>
              <p>
              Contributed to the development of InvestTrack, a web application designed to streamline 
              startup funding and investment tracking. Implemented key features such as funding round management, 
              API development and integration, and dynamically displaying data from a MySQL database using ReactJS 
              and NestJS.
              </p>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <div className="experience-period">2023</div>
                <div className="experience-location">Cebu City, Cebu</div>
              </div>
              <h3>Pet Society</h3>
              <h4>Full Stack Developer</h4>
              <p>Contributed to the development of Pet Society by building backend components using Spring Boot 
                and frontend features with ReactJS. Designed and implemented backend systems following 
                Object-Oriented Programming (OOP) principles to support performing application features. 
                Developed key functionalities such as the Pet Gallery and Pet Dictionary, incorporating full CRUD 
                (Create, Read, Update, Delete) operations for dynamic and user-friendly interactions. Ensured 
                seamless integration between the frontend and backend, optimizing APIs for efficient performance 
                and enhancing the overall user experience.
              </p>
            </div>
          </section>

          <section className="projects-section">
            <h2>
              <Code className="icon" />
              SKILLS & TECHNOLOGIES
            </h2>
            <ul>
              <li>Programming Languages: Python, Java, C++</li>
              <li>Web Technologies: HTML, CSS, React, NestJS</li>
              <li>Tools & Platforms: Git, GitHub, VS Code, Linux</li>
              <li>Databases: MySQL</li>
              <li>Soft Skills: Problem-solving, Teamwork, Communication</li>
            </ul>
          </section>
        </main>
      </div>
    </div>

      <button className="download-cv-btn" onClick={exportPDF}>
        <Download className="icon" />
        Download CV
      </button>
    </div>
  );
}

export default CV;
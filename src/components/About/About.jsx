import './about.css';
import React from 'react';
import { FaAward } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>+1 Years Working</small>
            </article>
          </div>

          <p>
          I am Junior Full-stack developer with a solid understanding of HTML, CSS, JavaScript React and React Native, Node.js, Express, MongoDB. I have experience working on team projects and specialize in creating visually appealing and user-friendly web applications, while also writing efficient code in JavaScript. My passion for innovation motivates me to constantly expand my skillset and explore new technologies. I am a quick learner with strong attention to detail, and I am excited to join a team where I can continue to develop both personally and professionally and make meaningful contributions to project success.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

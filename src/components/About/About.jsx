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
          I am a Junior fullstack Developer with a strong grasp of HTML, CSS, JavaScript, TypeScript, React, Node.js, and React Native. I have experience working as a team lead on collaborative projects and specialize in crafting visually appealing and user-friendly web applications, while also writing efficient JavaScript code. My enthusiasm for innovation drives me to continually expand my skill set and explore emerging technologies. I am a fast learner with keen attention to detail and am eager to join a team where I can further develop both personally and professionally, making meaningful contributions to project success.
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

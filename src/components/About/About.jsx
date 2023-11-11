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
            I am a Front-end developer with advanced skills in HTML, CSS,
            JavaScript, TypeScript, React, Node.js, and React Native. My
            expertise lies in creating visually appealing and user-friendly web
            applications, as well as writing efficient JavaScript code. I have
            experience working on collaborative commercial projects and
            volunteering on projects from ideation to implementation as a
            Frontend Developer.
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

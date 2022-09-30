import React from 'react';
import { Container } from 'react-bootstrap';
import photoElio from '../assets/images/mini.jpg';

const About = () => (
  <Container id="about" className="container-section flex-column text-center color-container mt-1 border rounded-3" fluid>
    <section className="about-section">
      <div className="profile">
        <div className="sup">
          <h1>Hi, I am Elio Cortés</h1>
          <p>
            I am Elio Cortés - a full-stack software engineer. Coding is my passion and I am in it for more than 10 years.
            I have experience working as .NET Developer mainly using ASP.NET MVC and REST API.
          </p>
          <p>
            Recently, I finish the Microverse Core Program where I had an interesting experience
            learning React and Ruby on Rails framework and interacting with developers around the world
            developing projects as collaborative way every week.
          </p>
        </div>
        <p className="scroll">
          Scroll down to explore more and get in touch.
        </p>
      </div>
      <div className="photo-person">
        <img src={photoElio} alt="Elio" className="rounded-circle" />
      </div>
    </section>
  </Container>
);

export default About;

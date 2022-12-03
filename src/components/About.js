import React from 'react';
import { Container } from 'react-bootstrap';
import photoElio from '../assets/images/mini.jpg';

const About = () => (
  <Container id="about" className="container-section flex-column text-center color-container mt-1 border rounded-3" fluid>
    <section className="about-section">
      <div className="profile">
        <div className="sup">
          <h1>Hi, I am Elio Cortés</h1>
          <ul className="about-text">
            <li>I am a full-stack software engineer with a degree in Systems Engineering.</li>
            <li>Coding has been my passion for over 10 years.</li>
            <li>With expertise in dot NET Core and Ruby on Rails frameworks.</li>
            <li>When I am not coding, you can find me training for the next running race or taking a hike in the countryside.</li>
          </ul>
          <p className="about-text" />
        </div>
      </div>
      <div className="photo-person">
        <img src={photoElio} alt="Elio" className="rounded-circle" />
      </div>
    </section>
  </Container>
);

export default About;

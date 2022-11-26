import React from 'react';
import { Container } from 'react-bootstrap';
import photoElio from '../assets/images/mini.jpg';

const About = () => (
  <Container id="about" className="container-section flex-column text-center color-container mt-1 border rounded-3" fluid>
    <section className="about-section">
      <div className="profile">
        <div className="sup">
          <h1>Hi, I am Elio Cortés</h1>
          <p className="about-text">
            Full-stack software engineer graduated as a systems engineer,
            coding is my passion and I have been in it for more than 10 years,
            experienced with .NET Core and Ruby on Rails frameworks.
          </p>
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

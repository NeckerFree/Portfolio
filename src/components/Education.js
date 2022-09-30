import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Education = () => (
  <Container
    id="education"
    className="container-section flex-column text-center color-container mt-1 pb-5 border rounded-3"
    fluid
  >
    <h1 className="section-title">Education</h1>
    <section className="text-black">
      <ul className="education-container">
        <li className="education-node mb-2">
          <Card style={{ width: '20rem', height: '6rem' }}>
            <Card.Body>
              <div>National University of Colombia</div>
              <div>Systems Engineer</div>
            </Card.Body>
          </Card>
        </li>
        <li className="education-node mb-2">
          <Card style={{ width: '20rem', height: '6rem' }}>
            <Card.Body>
              <div>Microverse Trainning Program</div>
              <div>Full Stack Web Developer</div>
            </Card.Body>
          </Card>
        </li>
      </ul>
    </section>
  </Container>
);

export default Education;

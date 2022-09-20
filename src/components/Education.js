import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Education = () => (
  <Container className="flex-column text-center color-container mt-2 pb-5 border rounded-3" fluid>
    <h1 className="education-title">Education</h1>
    <section id="education">
      <ul className="education-container">
        <li className="education-node">
          <Card style={{ width: '30rem' }}>
            <Card.Body>
              <div>National University of Colombia</div>
              <div>Systems Engineer</div>
            </Card.Body>
          </Card>
        </li>
        <li className="education-node">
          {/* <div className="d-flex mh-100"> */}
          <div className="vr divider-line" />
          {/* </div> */}
        </li>
        <li className="education-node">
          <Card style={{ width: '30rem' }}>
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

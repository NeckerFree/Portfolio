import React, { useState } from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  Row,
} from 'react-bootstrap';
// import resume from '../assets/files/Resume Elio Cortés Systems Engineer.pdf';

const Contact = () => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <Container
      id="contact"
      className="container-section flex-column text-center color-container mt-1 mb-2 pb-5 border rounded-3"
      fluid
    >
      <h1 className="section-title">Contact</h1>
      <section className="contact-section">
        <div className="contact-left">
          <h2>Let&apos;s talk</h2>
          <p>
            If you have an application you are interested in developing,
            a project that needs coding I&apos;d love to help with it
          </p>
          {/* <p>I am open to any collaborations and job opportunities.</p> */}
          <p>elio.cortes3000@gmail.com</p>
          {/* <a href={resume} className="resume" download="Resume Elio Cortes.pdf">Get my resume</a> */}
          <div className="contact-social">
            <p className="nav justify-content-center">Follow me on:</p>
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a className="nav-link" target="_blank" rel="noreferrer" href="https://github.com/NeckerFree">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/social/icons8-github-50.png`} alt="github" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/elionelsoncortes">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/social/icons8-linkedin-50.png`} alt="linkedin" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" target="_blank" rel="noreferrer" href="https://twitter.com/ElioCortesM">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/social/icons8-twitter-squared-50.png`} alt="twitter" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" target="_blank" rel="noreferrer" href="https://angel.co/u/elio-cortes">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/social/icons8-angellist-50.png`} alt="angel" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Form action="https://formspree.io/f/mrgjqdpe" method="post" noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-4">
            <Form.Group as={Col} md="8" controlId="fullName">
              <Form.Control name="name" required type="text" minLength={7} placeholder="Full name" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Please enter name (min length 7)</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} md="8" controlId="email">
              <Form.Control name="email" required type="email" placeholder="Email" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Please enter a valid email</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} md="8" controlId="message">
              <Form.Control
                name="comment"
                required
                minLength={10}
                placeholder="Type you message here..."
                as="textarea"
                rows={3}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Please enter message (min length 10)</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button className="btn btn-light btn-app active" type="submit">Submit</Button>
        </Form>
      </section>
    </Container>
  );
};
export default Contact;

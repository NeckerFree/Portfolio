import React from 'react';
import photo from '../assets/images/mini.jpg';

const About = () => (
  <section id="about" className="mt-2 border rounded-3">
    <div className="profile">
      <h1>Hi, I am Elio Cortés</h1>
      <p>
        I am Elio Cortés - a full-stack software engineer. Coding is my passion and I am in it for more than 10 years.
        I have experience working as .NET Developer mainly using ASP.NET MVC and REST API.
      </p>
      <p>
        Recently, I finish the Microverse Core Program where I had an interesting experience
        learning React and Ruby on Rails framework and interacting with developers around the world
        developing projects as collaborative way every week.

        Scroll down to explore more and get in touch.
      </p>

      <a className="btn btn-outline-light btn-lg" href="#!" role="button">Call to action</a>
    </div>
    <div className="photo">
      <img src={photo} alt="Logo" className="rounded-circle" />
    </div>
  </section>
);

export default About;

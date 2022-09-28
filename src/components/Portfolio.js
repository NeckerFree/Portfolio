import React from 'react';
import { Container } from 'react-bootstrap';
import records from '../data/projects.json';
import Project from './Project';

const Portfolio = () => (
  <Container id="portfolio" className="flex-column text-center color-container mt-2 pb-5 border rounded-3" fluid>
    <h1 className="section-title">Portfolio</h1>
    <section className="portfolio-projects">
      {records.Projects && records.Projects.map((project) => (
        <Project
          key={project.id.toString()}
          creationDate={project.creationDate}
          company={project.company}
          name={project.name}
          description={project.description}
          technologies={project.technologies}
          gitUrl={project.gitUrl}
          deploySite={project.deploySite}
          image={project.image}
        />
      ))}
    </section>
  </Container>
);

export default Portfolio;

import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Experience from './Experience';

const db = require('../libraries/portfolioDB');

const Experiences = () => {
  let experiences = [];
  useEffect(() => {
    const collection = db.collection('experience', './src/data/experience.json');
    if (experiences.length === 0) {
      experiences = collection.find({ multiple: true });
    }
  }, [experiences]);
  return (
    <Container className="flex-column text-center color-container mt-2 pb-5 border rounded-3" fluid>
      <h1 className="section-title">Experience</h1>
      <section id="experience">
        {experiences.map((experience) => (
          <Experience
            key={experience.id.toString()}
            id={experience.id}
            period={experience.startDate}
            company={experience.company}
            description={experience.description}
            functions={experience.functions}
          />
        ))}
      </section>
    </Container>
  );
};

export default Experiences;

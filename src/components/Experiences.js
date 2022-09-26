import React from 'react';
// import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Experience from './Experience';
import records from '../data/experience.json';

// const db = require('../libraries/portfolioDB');
const formatDate = (dateValue) => {
  const result = (dateValue === '')
    ? 'Present'
    : new Date(dateValue).toLocaleString('default', { month: 'short', year: 'numeric' });
  return result.toString();
};

const Experiences = () => (
  <Container id="experience" className="flex-column text-center color-container mt-2 pb-5 border rounded-3" fluid>
    <h1 className="section-title">Experience</h1>
    <section>
      {records.experience && records.experience.map((record) => (
        <Experience
          key={record.id.toString()}
          id={record.id}
          period={`${formatDate(record.startDate)} - ${formatDate(record.endDate)}`}
          company={record.company}
          position={record.position}
          description={record.description}
          functions={record.functions}
        />
      ))}
    </section>
  </Container>
);

export default Experiences;

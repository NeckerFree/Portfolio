import React from 'react';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import tree from '../assets/images/trunk.png';

const Skills = () => (
  <div>
    <Container className="flex-column text-center color-container mt-2 pb-5 border rounded-3" fluid>
      <div className="tree">
        <h1 className="title-skills">Skills</h1>
        <Image src={tree} alt="Skills" className="w-50 fluid" />
      </div>
    </Container>
  </div>
);

export default Skills;

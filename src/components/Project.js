import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import git from '../assets/images/icons/icons8-github-24.png';
import live from '../assets/images/icons/icons8-external-link-24.png';

const Project = (props) => {
  const {
    // creationDate,
    name,
    // company,
    description,
    technologies,
    gitUrl,
    deploySite,
    image,
  } = props;
  return (
    <Card className="color-container border rounded-3 m-1 pt-3 p-2">
      <Card.Header>
        <Card.Title>{description}</Card.Title>
        {/* <Card.Subtitle>{`(${name})`}</Card.Subtitle> */}
      </Card.Header>
      <Card.Body className="mt-1">
        <img className="project-image" src={`${process.env.PUBLIC_URL}/assets/images${image}`} alt={name} />
        {/* <Card.Text>{`${company} (${creationDate})`}</Card.Text> */}
      </Card.Body>
      <Card.Footer className="mt-4 ">
        <ul>
          {technologies.map((tech) => (
            <li key={tech.toString()}>{tech}</li>
          ))}
        </ul>
        <div className="footer-element">
          {gitUrl !== '' && (
            <a href={gitUrl} className="btn btn-light btn-app active" role="button">
              View Source
              <img src={git} alt="source" />
            </a>
          )}
          <a href={deploySite} className="btn btn-light btn-app active" role="button">
            Live Demo
            <img src={live} alt="live" />
          </a>
        </div>
      </Card.Footer>
    </Card>
  );
};

Project.propTypes = {
  // creationDate: PropTypes.string.isRequired,
  // company: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  gitUrl: PropTypes.string.isRequired,
  deploySite: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Project;

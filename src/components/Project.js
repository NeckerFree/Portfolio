import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const Project = (props) => {
  const {
    creationDate,
    company,
    name,
    description,
    technologies,
    gitUrl,
    deploySite,
    image,
  } = props;
  return (
    // <div className="d-flex aligns-items-center justify-content-center">
    <Card style={{ width: '19rem', height: '280px' }} className="color-container border rounded-3 m-1 pt-3 p-2">
      <Card.Img className="project-image" src={`${process.env.PUBLIC_URL}/assets/images/${image}`} />
      <Card.ImgOverlay>
        <Card.Header>
          <Card.Title>{description}</Card.Title>
          <Card.Subtitle>{`(${name})`}</Card.Subtitle>
        </Card.Header>
        {/* <ListGroup>
            <ListGroup.Item>{description}</ListGroup.Item>
          </ListGroup> */}
        <Card.Body className="mt-4">
          <Card.Text>{`${company}(${creationDate})`}</Card.Text>
          <Card.Link target="_blank" href={gitUrl}>Git Repo</Card.Link>
          <Card.Link target="_blank" href={deploySite}>Deploy Site</Card.Link>
        </Card.Body>
        <Card.Footer className="mt-4">
          {/* <Card.Text> */}
          <ul>
            {technologies.map((tech) => (
              <li key={tech.toString()}>{tech}</li>
            ))}
          </ul>
          {/* </Card.Text> */}
        </Card.Footer>
      </Card.ImgOverlay>
    </Card>
    // </div>
  );
};

Project.propTypes = {
  creationDate: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  gitUrl: PropTypes.string.isRequired,
  deploySite: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Project;

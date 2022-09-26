import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

function Experience(props) {
  const {
    period, description, company, position, functions,
  } = props;
  return (
    <Row className="experience-row justify-content-md-center">
      <Col className="experience-period" xs lg="2">
        <p>{period}</p>
      </Col>
      <Col md="auto">
        <div className="experience-line">
          <div className="experience-circle" />
        </div>
      </Col>
      <Col className="experience-info" xs lg="5">
        <p>
          <strong>{company}</strong>
          {` (${position})`}
        </p>
        {description !== '' && <p>{description}</p>}
        <ul>
          {functions.map((fun) => (
            <li key={fun.toString()}><p className="experience-function">{fun}</p></li>
          ))}
        </ul>
      </Col>
    </Row>
  );
}
Experience.propTypes = {
  period: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  functions: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Experience;

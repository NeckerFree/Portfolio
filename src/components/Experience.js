import React from 'react';
import PropTypes from 'prop-types';

function Experience(props) {
  const {
    period, description, company, functions,
  } = props;
  return (
    <div className="hmSQar">
      <div className="">
        <div className="ezSUTu">
          <p>{period}</p>
        </div>
        <div>
          <p>{company}</p>
          <p>{description}</p>
          <ul>
            {functions.map((fun) => (
              <li key={fun.toString()}><p>{fun}</p></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
Experience.propTypes = {
  period: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  functions: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Experience;

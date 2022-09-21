import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
// import tree from '../assets/images/trunk.png';
// import skillsFolder from '../assets/images/30';
// const directory = require.context('../assets/images/30/');

const Skills = () => {
  const [hover, setHover] = useState(false);
  const [imageName, setImageName] = useState('');
  const [listImages, setListImages] = useState([]);
  // const importAll = (r) => r.keys().map(r);
  function importAll(context) {
    const files = [];
    context.keys().forEach((filename) => {
      // console.log(filename);
      const name = filename.substring(filename.lastIndexOf('/') + 1, filename.lastIndexOf('.'));
      files.push({ file: name, content: context(filename) });
    });
    return files;
  }
  useEffect(() => {
    const listOfImages = importAll(require.context('../assets/images/30/', false, /\.(png|jpe?g|svg)$/));
    setListImages(listOfImages);
  }, [setListImages]);

  const onHover = (e) => {
    setHover(true);
    // alert(e.currentTarget);
    setImageName(e.currentTarget.alt);
  };

  const onLeave = () => {
    setHover(false);
    setImageName('');
  };

  return (
    <div>
      <Container className="flex-column text-center color-container mt-2 pb-5 border rounded-3" fluid>
        <div className="tree">
          <h1 className="title-skills">Skills</h1>
          <div className="image-container">
            {
              listImages.map((imgObject) => (
                <Image
                  className="skill"
                  key={imgObject.file.toString()}
                  src={imgObject.content}
                  alt={imgObject.file.toString()}
                  onMouseEnter={onHover}
                  onMouseLeave={onLeave}
                />
              ))
            }
          </div>
          {hover && <div className="skill-text">{imageName}</div>}

        </div>
      </Container>
    </div>
  );
};

export default Skills;

// const getExtension = str => {str.slice(str.lastIndexOf("."))};
// return fullPath.substring(fullPath.lastIndexOf('/') + 1);

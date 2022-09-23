import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
// import { debounce } from 'lodash';

// import tree from '../assets/images/trunk.png';
// import skillsFolder from '../assets/images/30';
// const directory = require.context('../assets/images/30/');

const Skills = () => {
  // const [hover, setHover] = useState(false);
  // const [imageName, setImageName] = useState('');
  const [listImages, setListImages] = useState([]);
  // const debbbouncedHandleMouseEnter = debounce(() => setHover(true), 500)
  // const [delayHandler, setDelayHandler] = useState(null);
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

  // const onHover = (e) => {
  //   setHover(true);
  //   setImageName(e.currentTarget.alt);
  //   // debounce(() => setHover(true), 500);
  //   console.log(hover);
  // };

  // const onLeave = () => {
  //   setHover(false);
  //   console.log(hover);
  //   // clearTimeout(delayHandler);
  //   setImageName('');
  //   // onHover.cancel();
  // };

  return (
    <div>
      <Container className="flex-column text-center color-container mt-2 pb-5 border rounded-3" fluid>
        <h1 className="title-skills">Skills</h1>
        <div className="tree">
          <div className="image-container">
            {
              listImages.map((imgObject) => (
                <div className="image-item rounded-1" key={imgObject.file.toString()}>
                  <Image
                    className="skill"
                    key={imgObject.file.toString()}
                    src={imgObject.content}
                    alt={imgObject.file.toString()}
                  // onMouseEnter={onHover}
                  // onMouseLeave={onLeave}
                  />
                  <div className="middle">
                    <div className="text">{imgObject.file.toString()}</div>
                    {/* {hover && <div className="text">{imageName}</div>} */}
                  </div>
                </div>
              ))
            }
          </div>
          {/* {hover && <div className="skill-text">{imageName}</div>} */}

        </div>
      </Container>
    </div>
  );
};

export default Skills;

// const getExtension = str => {str.slice(str.lastIndexOf("."))};
// return fullPath.substring(fullPath.lastIndexOf('/') + 1);

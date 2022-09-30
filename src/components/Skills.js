import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const Skills = () => {
  const [listImages, setListImages] = useState([]);
  function importAll(context) {
    const files = [];
    context.keys().forEach((filename) => {
      const name = filename.substring(filename.lastIndexOf('/') + 1, filename.lastIndexOf('.'));
      files.push({ file: name, content: context(filename) });
    });
    return files;
  }
  useEffect(() => {
    const listOfImages = importAll(require.context('../assets/images/30/', false, /\.(png|jpe?g|svg)$/));
    setListImages(listOfImages);
  }, [setListImages]);

  return (
    <div>
      <Container
        id="skills"
        className="container-section flex-column text-center color-container mt-1 pb-5 border rounded-3"
        fluid
      >
        <h1 className="section-title">Skills</h1>
        <section className="tree">
          <div className="image-container">
            {
              listImages.map((imgObject) => (
                <div className="image-item rounded-1" key={imgObject.file.toString()}>
                  <Image
                    className="skill"
                    key={imgObject.file.toString()}
                    src={imgObject.content}
                    alt={imgObject.file.toString()}
                  />
                  <div className="middle">
                    <div className="text">{imgObject.file.toString()}</div>
                  </div>
                </div>
              ))
            }
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Skills;

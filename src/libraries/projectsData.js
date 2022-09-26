const db = require('./portfolioDB');

const collection = db.collection('Projects', './src/data/projects.json');
collection.clear();
const microverseProjects = {
  creationDate: '02-01-2022',
  company: 'Microverse',
  name: 'Final Capstone project',
  description: 'Cars test drive App',
  technologies: ['React', 'Ruby on Rails'],
  gitUrl: 'https://github.com/NeckerFree/Cars',
  deploySite: 'https://cars-capstone.herokuapp.com',
  image: '/projects/final_capstone.png',
};
collection.insert(microverseProjects);

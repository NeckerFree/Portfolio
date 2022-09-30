const db = require('./portfolioDB');

const collection = db.collection('Projects', './src/data/projects.json');
collection.clear();
const MicroverseCapstoneProject = {
  creationDate: '09-09-2022',
  company: 'Microverse',
  name: 'Final Capstone project',
  description: 'Cars test drive app',
  technologies: ['React', 'Redux', 'Bootstrap', 'Ruby', 'Rails', 'JWT'],
  gitUrl: 'https://github.com/NeckerFree/Cars',
  deploySite: 'https://cars-capstone.herokuapp.com',
  image: '/projects/final_capstone.png',
};
collection.insert(MicroverseCapstoneProject);

const MicroverseMoneyProject = {
  creationDate: '08-12-2022',
  company: 'Microverse',
  name: 'Ruby on Rails Capstone',
  description: 'Budget app',
  technologies: ['Ruby_on_Rails', 'Boostrap', 'PostgreSql', 'Rspec'],
  gitUrl: 'https://github.com/NeckerFree/MyMoney',
  deploySite: 'https://MyMoney.herokuapp.com',
  image: '/projects/MyMoney.png',
};
collection.insert(MicroverseMoneyProject);

const MicroverseMetProject = {
  creationDate: '05-27-2022',
  company: 'Microverse',
  name: 'React-Redux Capstone',
  description: 'MET Museum of Art API',
  technologies: ['React', 'Redux', 'Jest', 'Axios'],
  gitUrl: 'https://github.com/NeckerFree/Capstone-Metropolitan-Museum-of-Art',
  deploySite: 'https://metropolitan-museum-art.netlify.app/',
  image: '/projects/met.png',
};
collection.insert(MicroverseMetProject);

const MicroverseConferenceProject = {
  creationDate: '05-14-2022',
  company: 'Microverse',
  name: 'Javascript Capstone',
  description: 'Running is a passion',
  technologies: ['Javascript', 'HTML', 'CSS', 'Bootstrap'],
  gitUrl: 'https://github.com/NeckerFree/Capstone-Module-1',
  deploySite: 'https://neckerfree.github.io/Capstone-Module-1/',
  image: '/projects/conference.png',
};
collection.insert(MicroverseConferenceProject);

const MicroverseMealsProject = {
  creationDate: '04-23-2022',
  company: 'Microverse',
  name: 'Javascript-Webpack Capstone',
  description: 'Meals Reservation app',
  technologies: ['HTML', 'CSS', 'Javascript', 'Webpack', 'Jest'],
  gitUrl: 'https://github.com/NeckerFree/Capstone-Module-2',
  deploySite: 'https://neckerfree.github.io/Capstone-Module-2/',
  image: '/projects/meals.png',
};
collection.insert(MicroverseMealsProject);

const MicroverseToDoProject = {
  creationDate: '04-07-2022',
  company: 'Microverse',
  name: 'Javascript-Webpack Project',
  description: 'TO-DO List app',
  technologies: ['HTML', 'CSS', 'Javascript', 'Webpack', 'Jest'],
  gitUrl: 'https://github.com/NeckerFree/To-Do-List',
  deploySite: 'https://neckerfree.github.io/To-Do-List/dist/index.html',
  image: '/projects/todo.png',
};
collection.insert(MicroverseToDoProject);

const superProjects = {
  creationDate: '06-01-2021',
  company: 'Super Sociedades',
  name: 'Software development',
  description: 'Development entity apps',
  technologies: ['.NET', 'C#', 'WS', 'MVC', 'EF', 'SQL_Server'],
  gitUrl: '',
  deploySite: 'https://www.supersociedades.gov.co/Servicio_Ciudadano/tramites-y-servicios/Paginas/default.aspx',
  image: '/projects/super_sociedades.png',
};
collection.insert(superProjects);

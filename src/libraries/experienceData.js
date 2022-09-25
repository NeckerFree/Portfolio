const db = require('./portfolioDB');
const collection = db.collection('experience', './src/data/experience.json');
collection.clear();
let microverseExperience = {
    startDate: '01-02-2022',
    endDate: '',
    position: 'Full Stack Web Developer',
    modality: 'trainning',
    functions: [],
    company: 'Microverse',
    description: 'Microverse training program',
    projects: [
        {
            name: 'Final Capstone project',
            description: 'Cars test drive App',
            technologies: ['React', 'Ruby on Rails'],
            gitUrl: 'https://github.com/NeckerFree/Cars',
            deploySite: 'https://cars-capstone.herokuapp.com',
            image: '/projects/final_capstone.png'
        }
    ]
};
collection.insert(microverseExperience);

let superSociedadesExperience = {
    startDate: '01-04-2020',
    endDate: '01-06-2021',
    position: '.NET Senior Developer',
    modality: 'job',
    functions: [
        'Definition of strategy, requirements and implementation to migrate web services from Informix to SQL Server database.',
'Created a new version of Web.API web services using JWT authentication and Swagger, developed the new required methods and migrated existing SQL queries to web methods and deployed REST services to production.',
'Deployed apps to the production environment and support the entity operations.'
    ],
    company: 'SUPERINTENDENCIA DE SOCIEDADES',
    description: 'Colombian government entity',
    projects: [
        {
            name: 'Software development',
            description: 'Development of the centralized web service layer and maintenance of entity applications.',
            technologies: ['.NET C#', 'SOAP Web Services', 'REST Web Services', 'ASPX.NET MVC', 'Entity Framework', 'Informix DB', 'SQL Server DB'],
            gitUrl: '',
            deploySite: 'https://www.supersociedades.gov.co/Servicio_Ciudadano/tramites-y-servicios/Paginas/default.aspx',
            image: '/projects/super_sociedades.png'
        }
    ]
};
collection.insert(superSociedadesExperience);

// const result = collection.find({ modality: 'trainning' });
// console.log(result);
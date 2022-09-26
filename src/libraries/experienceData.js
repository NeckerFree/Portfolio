const db = require('./portfolioDB');
const collection = db.collection('experience', './src/data/experience.json');
collection.clear();
let microverseExperience = {
    startDate: '02-01-2022',
    endDate: '',
    position: 'certificate: Full Stack Web Developer',
    modality: 'trainning',
    multiple: true,
    functions: [],
    company: 'Microverse training program',
    description: "JavaScript, React, Ruby on Rails",
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
    startDate: '04-01-2020',
    endDate: '06-30-2021',
    position: '.NET Senior Developer',
    modality: 'full time job',
    multiple: true,
    functions: [
        'Definition of strategy, requirements and implementation to migrate web services from Informix to SQL Server database.',
        'Created a new version of Web.API web services using JWT authentication and Swagger, developed the new required methods and migrated existing SQL queries to web methods and deployed REST services to production.',
        'Deployed apps to the production environment and support the entity operations.'
    ],
    company: 'Superintendencia de Sociedades',
    description: '',
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
let comwareExperience = {
    startDate: '05-01-2018',
    endDate: '05-30-2019',
    position: '.NET Senior Developer',
    modality: 'partial time job',
    multiple: true,
    functions: [
        'Implement dynamic form generation to register agricultural producers'
    ],
    company: 'Comware',
    description: '',
    projects: [
        {
            name: 'Dynamic Forms Generator',
            description: 'Dynamic Forms Generation to register agricultural producers',
            technologies: ['.NET C#', 'ASPX.NET MVC', 'Entity Framework', 'SQL Server DB'],
            gitUrl: '',
            deploySite: '',
            image: ''
        }
    ]
};
collection.insert(comwareExperience);

let dbSystemExperience = {
    startDate: '05-01-2017',
    endDate: '02-28-2018',
    position: '.NET Senior Developer',
    modality: 'full time job',
    multiple: true,
    functions: ['Implement use cases for royalties system at ministry of finance and public credit'],
    company: 'DB-System',
    description: '',
    projects: [
        {
            name: 'Royalties System',
            description: 'Implement use cases for royalties system at ministry of finance and public credit',
            technologies: ['ASP.NET MVC', 'SQL Server', 'Digital Certificates'],
            gitUrl: '',
            deploySite: '',
            image: ''
        }
    ]
};
collection.insert(dbSystemExperience);

let intergrupoExperience = {
    startDate: '09-01-2014',
    endDate: '07-31-2016',
    position: '.NET Senior Developer',
    modality: 'full time job',
    multiple: true,
    functions: [
        'Development from scratch of Clients and Affiliates App for Compensar',
        'Develop Improvements and new requirements for City Bank apps',
        'Coding Web Services for Consorcio Salud'
    ],
    company: 'Intergrupo',
    description: '',
    projects: [
        {
            name: 'Clients and Affiliates',
            description: '',
            technologies: ['ASP.NET MVC', 'SQL Server', 'SOAP Services'],
            gitUrl: '',
            deploySite: '',
            image: ''
        },
        {
            name: 'City Bank',
            description: 'Application support and maintenance',
            technologies: ['ASP.NET MVC', 'SQL Server', 'Web Services'],
            gitUrl: '',
            deploySite: '',
            image: ''
        },
        {
            name: 'Consortium Healthcare',
            description: 'Development of Soap Web Services',
            technologies: ['SQL Server', 'Web Services'],
            gitUrl: '',
            deploySite: '',
            image: ''
        }

    ]
};
collection.insert(intergrupoExperience);

let newExperience = {
    startDate: '00-00-0000',
    endDate: '00-00-0000',
    position: '',
    modality: '',
    multiple: true,
    functions: [],
    company: '',
    description: '',
    projects: [
        {
            name: '',
            description: '',
            technologies: [],
            gitUrl: '',
            deploySite: '',
            image: ''
        }
    ]
};
// collection.insert(newExperience);

// const result = collection.find({ modality: 'trainning' });
// console.log(result);
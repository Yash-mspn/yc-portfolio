import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'EduSparsh ERP system',
        description: "EduSparsh is a comprehensive ERP platform designed for educational institutions, built with Next.js, React Native, and PostgreSQL. This full-stack solution streamlines operations, enhances user experience, and ensures secure transactions. Designed and developed a full-stack ERP platform using Next.js and Node.js.",
        tools: ['Next.js, React Native, PostgreSQL',"MySQL"],
        role: 'Backend Developer',
        code: '',
        demo: 'https://www.edusparsh.com/',
        image: crefin,
    },
    {
        id: 2,
        name: 'E-commerce Platform Development',
        description: 'Designed and developed a full-stack e-commerce platform using React and Node.js Integrated a payment gateway and implemented secure user authentication.',
        tools: ['NextJS','react Js', 'Tailwind CSS', "Google Maps", "TypeScript", "MySQL"],
        role: 'Front end Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Website Development ',
        description: 'Developed multiple dynamic websites using Content Management Systems (CMS) for various clients, including: Healthcare: Created user-friendly websites for doctors, featuring appointment scheduling, patient information management, and online consultation services. Fitness: Built interactive websites for gyms, including class schedules, membership management, and fitness tracking capabilities.',
        tools: ['NextJS','React', 'Bootstrap', 'TypeScript', 'Firebase'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Website Development',
        description: "Developed multiple dynamic websites using Content Management Systems (CMS) for various clients, including: Education: Designed engaging websites for schools, incorporating features like event calendars, resource sharing, and parent communication tools. ",
        tools: ['NextJS', 'React', 'Bootstrap', 'TypeScript', 'Firebase' ],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
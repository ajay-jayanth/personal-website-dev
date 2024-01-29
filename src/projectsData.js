import vaporvision from './img/vaporvision.png';
import website from './img/website.png';
import optimineBanner from './img/optimine.jpg';
import nlpResearch from './img/nlp-research-diagram.png'

const projectsData = [
    {
        id: 0,
        bgImage: 'vaporvisionpage.jpg',
        projectImage: vaporvision,
        title: 'VaporVision',
        description: 
        `<text class='project-text'>
            A website that dynamically visualizes methane levels at a natural gas 
            site from 20+ sensors using Matplotlib and Gaussian Plume Modeling.
        </text>
        <text class='project-text'>
            It utilizes the Random Forest algorithm to predict the location of 
            hazardous leaks with an accuracy of 88% using SciKit-Learn and the 
            Google Maps API.
        </text>
        <text class='project-text'>
            We won 1st place in the HackUTD 2023 EOG Resources
            Sponsorship Challenge with 800+ participants.
        </text>`,
        projectUrl: 'https://devpost.com/software/vaporvision'
    },
    {
        id: 1,
        bgImage: 'website-code.png',
        projectImage: website,
        title: 'Portfolio Website',
        description: 
        `<text class='project-text'>
            I utilized React to build my portfolio website (this), which has both
            dynamic and static elements. 
        </text>
        <text class='project-text'>
            It is made with over 600 lines of code in JavaScript, HTML, and CSS. The
            code is public on GitHub.
        </text>
        <text class='project-text'>
            This was the project that ignited my passion for full-stack development, 
            allowing me to diversify my skills outside of AI/ML.
        </text>`,
        projectUrl: 'https://github.com/ajay-jayanth/personal-website/tree/master'
    },
    {
        id: 2,
        bgImage: 'mining.jpg',
        projectImage: optimineBanner,
        title: 'OptiMine',
        description: 
        `<text class='project-text'>
            We developed an app to optimize an asteroid mining strategy for EOG Resources 
            using Data Visualization with Pandas and Matplotlib and Deep Learning using Pytorch.
        </text>
        <text class='project-text'>
            I oversaw the project effort and was responsible for developing the Backend
            using PyTorch's Neural Network Model.
        </text>
        <text class='project-text'>
            We won 1st place in the HackUTD 2022 EOG Resources
            Sponsorship Challenge with 600+ participants.
        </text>`,
        projectUrl: 'https://devpost.com/software/optimine'
    },
    {
        id: 3,
        bgImage: 'messages.jpg',
        projectImage: nlpResearch,
        title: 'NLP Research',
        description: 
        `<text class='project-text'>
            I developed Natural Language Processing algorithms for categorizing 
            crisis tweets by training LSTMs and fine-tuning HuggingFace pre-trained models, 
            scoring 84-90% accuracy.
        </text>
        <text class='project-text'>
            I configured with numerous embeddings and model architectures to optimize
            the multitask classification of these crisis tweets into general categories,
            which enhance downstream tasks like sentiment analysis. 
        </text>
        <text class='project-text'>
            My work was published into the IEEE COMPSAC 2021 conference and won Best Poster 
            Award at UNT Multidisciplinary Information Research Symposium 2022.
        </text>`,
        projectUrl: 'https://doi.org/10.1109/COMPSAC51774.2021.00125'
    }
];

export default projectsData;
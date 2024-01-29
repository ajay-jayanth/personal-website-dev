import './App.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faDiscord, faInstagram, faDev } from '@fortawesome/free-brands-svg-icons';
import syftPortrait from './img/syft-self-port.jpg';
import syftLogo from './img/SYFT-favicon-dark.png';
import broadcomLogo from './img/broadcom-logo.png';
import materialabLogo from './img/materialab-logo.png';
import utdLogo from './img/utd-logo.png';
import aiCALogo from './img/aiCA-logo.png';
import projectsData from './projectsData';

function App() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentProjectIndex(index);
  }

  const renderDots = () => {
    return projectsData.map((project, index) => (
      <button
        key={project.id}
        className={`dot ${index === currentProjectIndex ? 'active' : ''}`}
        onClick={() => handleDotClick(index)}
      ></button>
    ));
  };

  return (
    <div className="App">
      <script src="https://kit.fontawesome.com/b5b196b557.js" crossorigin="anonymous"></script>
      <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
      <div className="panel-1" id="Home">
        <div className="Navbar">
          <ul>
            <li><a href="#Home">HOME</a></li>
            <li><a href="#About">ABOUT</a></li>
            <li><a href="#Experience">EXPERIENCE</a></li>
            <li><a href="#Projects">PROJECTS</a></li>
          </ul>
        </div>
        <div className="bg-1"></div>
          <header className="App-header">
            Hi, I'm Ajay Jayanth.
          </header>
        <div className="icons">
          <ul>
            <li><a href="https://github.com/ajay-jayanth" rel="noopener noreferrer" target="_blank" id="gh"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a></li>
            <li><a href="https://www.linkedin.com/in/ajay-jayanth/" rel="noopener noreferrer" target="_blank" id="LIn"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a></li>
            <li><a href="https://discordapp.com/users/694029330660982817" rel="noopener noreferrer" target="_blank" id="dsc"><FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon></a></li>
            <li><a href="https://www.instagram.com/ajay.jayanth/" rel="noopener noreferrer" target="_blank" id="ig"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a></li>
            <li><a href="https://www.devpost.com/ajay-jayanth/" rel="noopener noreferrer" target="_blank" id="devpost"><FontAwesomeIcon icon={faDev}></FontAwesomeIcon></a></li>
            <li><a href="mailto:ajay-jayanth04@gmail.com" rel="noopener noreferrer" target="_blank" id="mail"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></a></li>
          </ul>
        </div>
      </div>
      <div className="panel-2" id="About">
        <div className='mainbox'>
          <div className='leftBox'>
            <h3 className='panel-header-1'>About Me</h3>
            <text>
              I am a student with a deep passion for Full-Stack Development and
              Artificial Intelligence. Currently pursuing my B.S. in Computer 
              Science at the University of Texas at Dallas, I am driven by a 
              relentless curiosity for cutting-edge technologies. As a Software 
              Developer at SYFT, Inc., an emerging Fashion AI startup in Dallas, 
              TX, I drive the evolution of the company's initial products and 
              directly influence the trajectory of its software landscape.
            </text>
          </div>
          <div className='imgBox'>
            <img className='syft-portrait' src={syftPortrait} alt='syft'></img>
          </div>
        </div>
      </div>
      <div className="panel-3" id="Experience">
        {/* <h3>Experience</h3> */}
        <div className='experiences-list'>
          <div className='exp-box' id='syft-exp-box'>
            <div className='exp-img-container'>
              <img className='exp-img' src={syftLogo} alt=''></img>
            </div>
            <div className='exp-textbox'>
              <h3 className='exp-title' id='syft-title'>Software Engineer at SYFT, Inc.</h3>
            </div>
          </div>
          <div className='exp-box' id='broadcom-exp-box'>
            <div className='exp-img-container'>
              <img className='exp-img' src={broadcomLogo} alt=''></img>
            </div>
            <div className='exp-textbox'>
              <h3 className='exp-title' id='broadcom-title'>Machine Learning Intern at Broadcom</h3>
            </div>
          </div>
          <div className='exp-box' id='utd-exp-box'>
            <div className='exp-img-container'>
              <img className='exp-img' src={utdLogo} alt=''></img>
            </div>
            <div className='exp-textbox'>
              <h3 className='exp-title' id='utd-title'>Undergrad CS Student at UTDallas</h3>
            </div>
          </div>
          <div className='exp-box' id='materialab-exp-box'>
            <div className='exp-img-container'>
              <img className='exp-img' src={materialabLogo} alt=''></img>
            </div>
            <div className='exp-textbox' id='materialab-textbox'>
              <h3 className='exp-title' id='materialab-title'>Research Fellow at MateriaLAB</h3>
            </div>
          </div>
          <div className='exp-box' id='aiCA-exp-box'>
            <div className='exp-img-container'>
              <img className='exp-img' src={aiCALogo} alt=''></img>
            </div>
            <div className='exp-textbox'>
              <h3 className='exp-title' id='aiCA-title'>Coding Instructor at AI Code Academy</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='panel-4' id='Projects'>
        <div className='projects-underlay'  style={{ transform: `translateX(${currentProjectIndex * -100}vw)` }}>
          {projectsData.map((project) => (
            <div className='project-background' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/public-img/${project.bgImage})` }}>
              <div className='backdrop-filter-cover'>
                <div className='bodybox'>
                    <div key={project.id} className='project-box'>
                      <a href={project.projectUrl} rel="noopener noreferrer" target="_blank">
                        <div className='project-img-container'>
                          <img src={project.projectImage} alt='' className='project-img'></img>
                        </div>
                        <div className='project-details'>
                          <h3 className='project-title'>{project.title}</h3>
                          <div dangerouslySetInnerHTML={{ __html: project.description }} />
                        </div>
                      </a>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='dots-container'>{renderDots()}</div>
      </div>
    </div>
  );
};

export default App;

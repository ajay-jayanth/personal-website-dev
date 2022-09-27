import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
      <script src="https://kit.fontawesome.com/b5b196b557.js" crossorigin="anonymous"></script>
      <div className="panel-1" id="Home">
        <div className="Navbar">
          <ul>
            <li><a href="#Home">HOME</a></li>
            <li><a href="#About">ABOUT</a></li>
            <li><a href="#Experience">EXPERIENCE</a></li>
            <li><a href="#Research">RESEARCH</a></li>
            <li><a href="#Activities">ACTIVITIES</a></li>
            <li><a href="#Contact">CONTACT</a></li>
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
            <li><a href="https://www.instagram.com/the_ordinary_ajay/" rel="noopener noreferrer" target="_blank" id="ig"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a></li>
            <li><a href="mailto:kunhu2004@gmail.com" rel="noopener noreferrer" target="_blank" id="mail"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></a></li>
          </ul>
        </div>
      </div>
      <div className="panel-2" id="About">
        <div className="body-2">
          <h1>About</h1>
          <p>I'm currently a college freshman majoring in Computer Science and have engaged in numerous diverse extracurriculars and projects to build my technical and soft skills to pursue a career in the field.</p>
          {/* <h2 id="s1">Education</h2>
          <p id="p2">Pursuing B.S. in Computer Science at the University of Texas at Dallas</p>
          <p id="p3">Graduated the Texas Academy of Mathematics of Science with Highest Academic Distinction</p> */}
        </div>
      </div>
      <div className="panel-3" id="Experience">

      </div>
    </div>
  );
}

export default App;

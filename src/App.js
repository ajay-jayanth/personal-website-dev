import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
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
            <li><a href="#PROJECTS">PROJECTS</a></li>
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
            <li><a href="mailto:ajay-jayanth04@gmail.com" rel="noopener noreferrer" target="_blank" id="mail"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></a></li>
          </ul>
        </div>
      </div>
      <div className="panel-2" id="About">
        <h3>About Me</h3> 
        <div className="body-2">
          <div className="mainbox">
            <div className="leftbox">
              <h1>CURRENT POSITION</h1>
              <h2>Undergraduate Research Fellow and Computer Science Student</h2>
              <h1>MateriaLAB @ UNT</h1>
            </div>
            <div className="rightbox">
              <p>I'm a Computer Science student set to graduate on May 2024 from the University of Texas at Dallas.</p>
              <p>While pursuing numerous computer science endeavors, such as competitions, projects, and internships, I have acquired a toolbox of both technical and soft skills that I am continually refining and challenging.</p>
              <p>Currently, I am a research fellow, but I am open to Computer Science internship opportunities for Summer 2023.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="panel-3" id="Experience">
        <h3>Experience</h3>
        <div className="bodybox">
          <ul>
            <li>
              <div className="listbox">
                <div className="leftbox">
                  <img class="w-full h-5/6 object-cover rounded-3xl" src="http://www.materialab.org/uploads/1/2/7/3/127334193/published/mos2-h2o-test2.png?1584646377" alt="MateriaLAB"></img>
                </div>
                <div className="rightbox">
                  <h4>Undergraduate Research Fellow</h4>
                  <div className="date">Aug 2020 – Present</div>
                  <p>Developing a Python plugin called Environ, which has numerous functionalities and applications in the field of computational chemistry. Awarded $500 stipend to continue this research during Fall 2022.</p>
                  <p>Optimized Deep Learning algorithms (Graphical Neural Networks and CNNs) to calculate solvation energies of multiple solute-solvent pairs.</p>
                </div>
              </div>
            </li>
            <li>
              <h4 id="wip">Work in Progress...</h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

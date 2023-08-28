import beach from '../assets/beach.jpeg';
import dog from '../assets/dog.jpeg';
import ocean from '../assets/ocean.jpeg';
import surfer from '../assets/surfer.jpeg';
import tower from '../assets/tower.jpeg';
import flowers from '../assets/flowers.jpg';


export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="projects-container">
        <div className="card">
          <header><a href="https://murmuring-sierra-21351-123e19ae1f23.herokuapp.com/login">Git A Job</a></header>
          <img src={beach} alt="shells on the sand with the ocean blurred in the background" />
          <p><a href="https://github.com/rayr482/job-board">GitHub Repo</a></p>
        </div>
        <div className="card">
          <header><a href="https://esztergb.github.io/doggy-gps/">Doggy GPS</a></header>
          <img src={dog} alt="black lab" />
          <p><a href="https://github.com/Esztergb/doggy-gps">GitHub Repo</a></p>
        </div>
        <div className="card">
          <header>Future Project</header>
          <img src={flowers} alt="flowers" />
          <p><a href="https://www.google.com">Future Project Repo</a></p>
        </div>
      </div>
      <div className="applications-container">
        <div className="card">
          <header><a href="https://kristinehkim.github.io/password-generator/">Password Generator</a></header>
          <img src={tower} alt="the Leaning Tower of Pisa" />
          <p><a href="https://github.com/kristinehkim/password-generator">GitHub Repo</a></p>
        </div>
        <div className="card">
          <header><a href="https://kristinehkim.github.io/work-day-scheduler/">Work Day Scheduler</a></header>
          <img src={ocean} alt="scenic ocean, shoreline, and grassy hill view" />
          <p><a href="https://github.com/kristinehkim/work-day-scheduler">GitHub Repo</a></p>
        </div>
        <div className="card">
        <header><a href="https://ancient-basin-84021-467278b42de0.herokuapp.com/">Text Editor</a></header>
        <img src={surfer} alt="surfer with surfboard walking on the beach at sunset" />
        <p><a href="https://github.com/kristinehkim/text-editor">GitHub Repo</a></p>
      </div>
      </div>
    </div>
  );
}

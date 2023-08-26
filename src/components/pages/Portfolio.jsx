import beach from '../assets/beach.jpeg';
import dog from '../assets/dog.jpeg';
import ocean from '../assets/ocean.jpeg';
import surfer from '../assets/surfer.jpeg';
import tower from '../assets/tower.jpeg';


export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="projects-container">
        <div className="card">
          <header>Main Projects</header>
          <img src={beach} alt="shells on the sand with the ocean blurred in the background" />
          <p><a href="https://murmuring-sierra-21351-123e19ae1f23.herokuapp.com/login">Git A Job</a></p>
        </div>
        <div className="card">
          <header>Projects</header>
          <img src={dog} alt="black lab" />
          <p><a href="https://esztergb.github.io/doggy-gps/">Doggy GPS</a></p>
        </div>
      </div>
      <div className="applications-container">
        <div className="card">
          <header>Projects</header>
          <img src={tower} alt="the Leaning Tower of Pisa" />
          <p><a href="http://www.google.com">Deployed Applications</a></p>
        </div>
        <div className="card">
          <header>Projects</header>
          <img src={ocean} alt="scenic ocean, shoreline, and grassy hill view" />
          <p><a href="http://www.google.com">Deployed Applications</a></p>
        </div>
      </div>
      <div className="card">
        <header>Projects</header>
        <img src={surfer} alt="surfer with surfboard walking on the beach at sunset" />
        <p><a href="http://www.google.com">Deployed Applications</a></p>
      </div>
    </div>
  );
}

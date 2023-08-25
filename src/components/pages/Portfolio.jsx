export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="card">
        <header>Main Projects</header>
        <img src="./assets/images/beach.jpeg"
          alt="shells on the sand with the ocean blurred in the background" />
        <p><a href="https://esztergb.github.io/doggy-gps/">Deployed Applications</a></p>
      </div>
      <div className="card">
        <header>Projects</header>
        <img src="./assets/images/dog.jpeg" alt="black lab" />
        <p><a href="https://murmuring-sierra-21351-123e19ae1f23.herokuapp.com/login">Deployed Applications</a></p>
      </div>
      <div className="card">
        <header>Projects</header>
        <img src="./assets/images/tower.jpeg" alt="the Leaning Tower of Pisa" />
        <p><a href="http://www.google.com">Deployed Applications</a></p>
      </div>
      <div className="card">
        <header>Projects</header>
        <img src="./assets/images/ocean.jpeg" alt="scenic ocean, shoreline, and grassy hill view" />
        <p><a href="http://www.google.com">Deployed Applications</a></p>
      </div>
      <div className="card">
        <header>Projects</header>
        <img src="./assets/images/surfer.jpeg"
          alt="surfer with surfboard walking on the beach at sunset" />
        <p><a href="http://www.google.com">Deployed Applications</a></p>
      </div>
    </div>
  );
}

import resume from '../assets/images/resumekkim.pdf';

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <p>Download my <a href={resume}>resume</a></p>
      <div>
        <h3>Front-end Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h3>Back-end Proficiencies</h3>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>Mongo, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
          <li>JWT</li>
        </ul>
      </div>
    </div>
  );
}

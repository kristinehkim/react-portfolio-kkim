import myImage from '../assets/kkim.png';


export default function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
      <div className="about-container">
        <img src={myImage} className="myImage" />
        <p>
          My name is Kristine Kim and I was a teacher for 16 years. I taught English to first graders in Mexico for 4 years then moved back to San Diego. I was at an inner city school teaching 5th grade for 12 years.  I incorporated technology into the classroom on a daily basis which led me to an interest in technology. I am now looking to get into the tech industry. Being a teacher has molded me into a dilligent worker that will transfer into any job in any industry.  I have learned a huge amount of information through UCSD coding bootcamp program, and I am excited to showcase my skills in this portfolio. Please browse this site showcasing my abilities and what I have accomplished during the course. If interested in reaching out to me, contact information is provided below. 
        </p>
      </div>
    </div>
  );
}

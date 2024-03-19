import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hey, My Name is Safvan</h2>
        <div className="prompt">
          <p>A Python Full Stack Developer with a passion for learning and creating.</p>
          <a href="https://www.linkedin.com/in/safvanhameed" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
          <a href="mailto:safvanhameed5@gmail.com" target="_blank" rel="noopener noreferrer"><EmailIcon /></a>
          <a href="https://github.com/safvanhameed5" target="_blank" rel="noopener noreferrer"><GithubIcon /></a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, JavaScript,
              Bootstrap
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              Python, Django, MySQL, PostgreSQL, MongoDB, RESTful API,
              Git
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python, C, C++, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;

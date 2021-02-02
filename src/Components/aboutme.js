import React, { Component } from "react";
import "./aboutme.css";
import { Grid, Cell } from "react-mdl";
import David from "../images/David.png";

class About extends Component {
  render() {
    return (
      <div className="about" id={"about"}>
        <h1>About</h1>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img src={David} alt="avatar" style={{ height: "100%" }} />
            </div>
          </Cell>
          <Cell col={4} className="aboutme-right-col">
            <p>
              I am a Software Engineer who recently graduated from{" "}
              <strong>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://flatironschool.com/campuses/nyc"
                >
                  Flatiron Schools
                </a>
              </strong>{" "}
              in NYC (2020), and received a Bachelor in Technology (specializing
              in Software Development) from{" "}
              <strong>New York City College of Technology (CUNY)</strong> in
              2019.
            </p>
            <p>
              While attending CUNY for my Bachelor, I took on many
              opportunities. One of my proudest moments was getting the chance
              to educate kids the fundementals of JavaScript programming in
              after school programs throughout NYC. In 2018 I was brought on as
              an Instructor at a Bronx Alternative High School, where I taught
              an elective "Intro to Programming".
            </p>
            <p>
              Shortly after receiving my BTech, the pandemic had hit the U.S.
              and many companies were on a hiring freeze. I decided to take this
              opporunity to better myself and my skills. I enrolled in a 15-week
              bootcamp at Flatiron, where I learned in-depth knowledge and
              gained new skills to becoming a Full Stack Web Developer. On
              October 23, 2020, I officially graduated from Flatiron School.
            </p>
            <p>
              When I'm not programming, I enjoy traveling the world and
              experiencing different cultures. I have a goal to visit 40
              countries by the time I am 40 yrs old. I began traveling 4 years
              ago, and have visited 21 countries so far!
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;

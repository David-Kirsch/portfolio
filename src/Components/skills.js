import React, { Component } from "react";
import "./skills.css";

class Skills extends Component {
  render() {
    return (
      <div className="skills" id={"skills"}>
        <h1>Skills</h1>
        <table>
          <tr>
            <td>JavaScript</td>
            <td>Ruby</td>
          </tr>
          <tr>
            <td>React</td>
            <td>Ruby On Rails</td>
          </tr>
          <tr>
            <td>Java</td>
            <td>Swift</td>
          </tr>
          <tr>
            <td>React Native</td>
            <td>Android Studio</td>
          </tr>
          <tr>
            <td>Python</td>
            <td>Bootstrap</td>
          </tr>
          <tr>
            <td>SQLite</td>
            <td>PostgreSQL</td>
          </tr>
          <tr>
            <td>HTML</td>
            <td>CSS</td>
          </tr>
          <tr>
            <td>GitHub</td>
            <td>Adobe Photoshop</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Skills;

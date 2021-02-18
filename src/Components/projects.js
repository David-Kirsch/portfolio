import React, { Component } from "react";
import "./projects.css";
import ProjectCard from "./projectCard";
import ApartmentLogo from "../images/RATEMYAPARTMENTLOGO.png";
import LingoLogo from "../images/LingoLogo.png";
import GWiz from "../images/G-Wiz.png";
import WP from "../images/wp_logo.png";
import PowerUpIcon from "../images/PowerUpIconCopy.png";
import { Grid, Cell } from "react-mdl";

class Projects extends Component {
  render() {
    const projects = [
      {
        name: "The Washington Post Trivia Game",
        img: WP,
        stack: "Android Studio / Java",
        desc:
          "A fun travia game that tests your knowledge about The Washington Post.",
        frontend: "https://github.com/David-Kirsch/Android_Trivia_App",
        demo:
          "https://www.loom.com/share/e9023bf6fa9245f6b82dc42d97ec8b77?sharedAppSource=personal_library",
        device: "Mobile App",
      },
      {
        name: "Rate My Apartment Mobile",
        img: ApartmentLogo,
        stack: "React Native",
        desc:
          "A community-based web application that gives a voice to tenants, giving " +
          "potential tenants all the information they need to help make the decision that " +
          "is right for them when selecting their next apartment.",
        frontend: "https://github.com/David-Kirsch/RateMyApartmentApp",
        demo:
          "https://www.loom.com/share/a4f518094b8d490c8c4cf3c29ee25f18?sharedAppSource=personal_library",
        device: "Mobile App",
      },
      {
        name: "Rate My Apartment Web",
        img: ApartmentLogo,
        stack: "ReactJS and Ruby on Rails",
        desc:
          "A community-based web application that gives a voice to tenants, giving " +
          "potential tenants all the information they need to help make the decision that " +
          "is right for them when selecting their next apartment.",
        // frontend: 'https://github.com/David-Kirsch/Rate_My_Landlord_Client',
        // backend: 'https://github.com/David-Kirsch/Rate_My_Landlord',
        demo: "https://www.loom.com/share/2fe1d5160728479490fc447f4d00be1c",
        website: "https://www.ratemyapartment.nyc",
        device: "Website",
      },
      {
        name: "Lingo Chat",
        img: LingoLogo,
        stack: "ReactJS and Firebase",
        desc:
          "A chat group web application that allows users to chat with anyone " +
          "from around the world without worrying about the language barrier.",
        frontend: "https://github.com/David-Kirsch/Lingo-Chat",
        backend: null,
        demo: "https://www.loom.com/share/308fcd513bc3439582763092c14d676d",
        website: "https://thawing-river-87320.herokuapp.com/",
        device: "Website",
      },
      {
        name: "G-Wiz",
        img: GWiz,
        stack: "Vanilla JavaScript, HTML & CSS",
        desc:
          "A fun and interactive way to learn new words and test your understanding " +
          "of related words. A great SAT prep, starting from elementary school level " +
          "up to high school.",
        frontend: "https://github.com/David-Kirsch/G-Wiz-client",
        backend: "https://github.com/David-Kirsch/G-Wiz-api",
        demo: "https://www.loom.com/share/a2adc87e548c4187a4130bfe59dc3817",
        website: null,
        device: "Website",
      },
      {
        name: "PowerUp",
        img: PowerUpIcon,
        stack: "Swift",
        desc:
          "An educational game built for iOS that helps facilitate the breaking down " +
          "of base10 number to binary (base2) in a fun and interactive way",
        frontend: "https://github.com/David-Kirsch/PowerUp",
        backend: null,
        demo: "https://www.loom.com/share/5c4df303dd5b45bc9f6662ad54ed05a2",
        website: null,
        device: "Mobile App",
      },
    ];

    let myProjectCard = projects.map((project, index) => (
      <ProjectCard data={project} key={index} />
    ));
    return (
      <div className="projects category-tabs" id={"projects"}>
        <h1>Projects</h1>
        <Grid>
          {myProjectCard}
          <Cell col={12}></Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;

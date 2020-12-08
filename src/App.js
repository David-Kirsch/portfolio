import React, { Component } from 'react'
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import AboutMe from './Components/aboutme'
import { Link } from 'react-router-dom'
import Home from './Components/home';
import Resume from './Components/resume'
import Projects from './Components/projects'
import Contact from './Components/contact'
import Skills from './Components/skills'
import { HashLink } from 'react-router-hash-link'
import ScrollableSection, {ScrollableLink} from 'react-update-url-on-scroll'


class App extends Component {
  
  render(){
    return (
      <div className="demo-big-content">
      <Layout>
          <Header className='header-color' scroll>
              <HashLink smooth to="/#home">Home</HashLink>
              <HashLink smooth to="/#aboutme">About Me</HashLink>
              <HashLink smooth to="/#skills">Skills</HashLink>
              <HashLink smooth to="/#resume">Resume</HashLink>
              <HashLink smooth to="/#projects">Projects</HashLink>
              <HashLink smooth to="/#contact">Contact</HashLink>
          </Header>
          {window.innerWidth > 800 ? null :
            <Drawer className="nav-side-bar">
                <HashLink smooth to="/#home">Home</HashLink>
                <HashLink smooth to="/#aboutme">About Me</HashLink>
                <HashLink smooth to="/#skills">Skills</HashLink>
                <HashLink smooth to="/#resume">Resume</HashLink>
                <HashLink smooth to="/#projects">Projects</HashLink>
                <HashLink smooth to="/#contact">Contact</HashLink>
            </Drawer>
          }
          <Content>
            <ScrollableSection hash={'Home'}>
              {/* <div className="page-content" /> */}
              <div id="home"><br/><br/></div>
              <Home />
              </ScrollableSection>
              <ScrollableSection hash={'aboutme'}>
              <div id="aboutme"><br/><br/></div>
              <AboutMe />
              </ScrollableSection>
              <ScrollableSection hash={'skills'}>
                <div id="skills"><br/><br/></div>
                <Skills />
              </ScrollableSection>
              <ScrollableSection hash={'resume'}>
              <div id="resume"><br/><br/></div>
              <Resume />
              </ScrollableSection>
              <ScrollableSection hash={'projects'}>
              <div id="projects"><br/><br/></div>
              <Projects />
              </ScrollableSection>
              <ScrollableSection hash={'contact'}>
              <div id="contact"><br/><br/></div>
              <Contact />
              </ScrollableSection>
          </Content>
      </Layout>
  </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import './App.css';
import { Layout, Header, Drawer, Content } from 'react-mdl';
import AboutMe from './Components/aboutme'
import Home from './Components/home';
import Resume from './Components/resume'
import Projects from './Components/projects'
import Skills from './Components/skills'
import Contact from './Components/contact'
import { HashLink } from 'react-router-hash-link'
import  ScrollableSection from 'react-update-url-on-scroll'



class App extends Component {
  
  render(){
    return (
      <div className="demo-big-content">
      <Layout>
          <Header className='header-color' scroll>
              <HashLink smooth to="/#home">Home</HashLink>
              <HashLink smooth to="/#about">About</HashLink>
              <HashLink smooth to="/#skills">Skills</HashLink>
              <HashLink smooth to="/#resume">Resume</HashLink>
              <HashLink smooth to="/#projects">Projects</HashLink>
              <HashLink smooth to="/#contact">Contact</HashLink>
              <div className="container">
                Connect
              </div>
              <div className="connect">
                <a href="https://github.com/David-Kirsch" target="_blank" rel="noreferrer"><i class="fab fa-github-square"></i></a>
                <a href="http://linkedin.com/in/davidjkirsch" target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a>
                <a href="https://davidjkirsch.medium.com/" target="_blank" rel="noreferrer"><i class="fab fa-medium"></i></a>
                <a href="mailto:davidjkirsch@gmail.com"><i class="far fa-envelope"></i></a>
              </div>
          </Header>
          {window.innerWidth > 800 ? null :
            <Drawer className="nav-side-bar">
                <HashLink smooth to="/#home">Home</HashLink>
                <HashLink smooth to="/#about">About</HashLink>
                <HashLink smooth to="/#skills">Skills</HashLink>
                <HashLink smooth to="/#resume">Resume</HashLink>
                <HashLink smooth to="/#projects">Projects</HashLink>
                <HashLink smooth to="/#contact">Contact</HashLink>
                <div className="container">
                Connect
              </div>
              <div className="connect">
                <a href="https://github.com/David-Kirsch" target="_blank" rel="noreferrer"><i class="fab fa-github-square"></i></a>
                <a href="http://linkedin.com/in/davidjkirsch" target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a>
                <a href="https://davidjkirsch.medium.com/" target="_blank" rel="noreferrer"><i class="fab fa-medium"></i></a>
                <a href="mailto:davidjkirsch@gmail.com"><i class="far fa-envelope"></i></a>
              </div>
            </Drawer>
          }
          <Content>
            <ScrollableSection hash={'Home'}>
              {/* <div className="page-content" /> */}
              <div id="home"><br/><br/></div>
              <Home />
              </ScrollableSection>
              <ScrollableSection hash={'about'}>
              <div id="about"><br/><br/></div>
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
              <ScrollableSection hash={'contact'}>
                <div id='contact'><br/><br/></div>
                <Contact />
              </ScrollableSection>
              </ScrollableSection>
          </Content>
      </Layout>
  </div>
    );
  }
}

export default App;

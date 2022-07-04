import React, { Component } from 'react'
import { Cell, Grid } from 'react-mdl'
import ProfilePic from '../images/David.png'
import './home.css'

class LandingPage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}} id={"home"}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                        src={ProfilePic} alt="profile" className='profilePic'
                        />
                        <div className='banner-text'>
                            <h1 className='name'>David Kirsch</h1>
                            <h1>Android &amp; Web Developer</h1>
                            <hr/>
                            <p>Kotlin | React | JavaScript | Ruby | Ruby on Rails | Java | HTML/CSS | SQLite | PostgreSQL</p>
                            <div className="social-links">
                                {/*Github */}
                                <a href="https://github.com/David-Kirsch" rel="noreferrer" target="_blank">
                                <i class="fab fa-github-square"></i>
                                </a>

                                {/*Linked In */}
                                <a href="http://linkedin.com/in/davidjkirsch" rel="noreferrer" target="_blank">
                                <i class="fab fa-linkedin"></i>
                                </a>

                                {/*Medium */}
                                <a href="https://medium.com/@davidjkirsch" rel="noreferrer" target="_blank">
                                <i class="fab fa-medium"></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage

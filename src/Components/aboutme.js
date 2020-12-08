import React, { Component } from 'react'
import './aboutme.css'
import Banner from '../images/banner.png'

class About extends Component {
    render() {
        return (
            <div className="aboutme" id={'aboutme'}>
                <h1>About Me</h1>
                <img src={Banner} alt='banner'/>
            </div>
        )
    }
}

export default About
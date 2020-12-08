import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import './resume.css'
import DavidDesk from '../images/desk.JPG'
import Education from './education'
import ResumeDoc from '../images/David_Kirsch_Resume.pdf'

class Resume extends Component {
    render() {
        return (
            <div className="resume" id={'resume'}>
                <h1>Resume</h1>
                    <div className='resume-container'>
                        <embed src={`${ResumeDoc}#toolbar=1&scrollbar=0`} type="application/pdf" height="1090" width="800"></embed>
                    </div>
            </div>
        )
    }
}

export default Resume

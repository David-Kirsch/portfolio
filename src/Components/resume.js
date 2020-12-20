import React, { Component } from 'react'
import './resume.css'
import ResumeDoc from '../images/David_Kirsch_Resume.pdf'


class Resume extends Component {
    render() {
        return (
            <div className="resume" id={'resume'}>
                <h1>Resume</h1>
                    <div className='resume-container'>
                    <object style={{height: '100vh', width: '50vw'}} data={`${ResumeDoc}?#zoom=85&scrollbar=0&toolbar=1&navpanes=0`} aria-label='resume' type="application/pdf" />
                   
                    
                    </div>
            </div>
        )
    }
}

export default Resume

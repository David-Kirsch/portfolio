import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import './resume.css'
import DavidDesk from '../images/desk.JPG'
import Education from './education'

class Resume extends Component {
    render() {

        const edu = [
            {
                schoolName: "Flatiron Schools",
                degree: "Certificate of Completion",
                gradDate: "October 2020",
                fos: "Full Stack Web Development"
            },
            {
                schoolName: "New York City College of Technology (CUNY)",
                degree: "Bachelor of Technology",
                gradDate: "January 2020",
                gpa: 3.3,
                fos: "Software Development"
            },
            {
                schoolName: "American Musical and Dramatic Academy",
                degree: "Certificate of Completion",
                gradDate: "May 2008",
                fos: "Musical Theater Performance"
            }
        ]

        const listOfEdu = edu.map(school => <Education schoolDetails={school}/>)

        return (
            <div className="resume" id={'resume'}>
                <h1>Resume</h1>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                            src={DavidDesk}
                            alt='avatar'
                            style={{height: '200px'}}
                            />

                        </div>
                    </Cell>
                    <Cell col={4} className='resume-right-col'>
                        <h2>Education</h2>
                        {listOfEdu}
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume

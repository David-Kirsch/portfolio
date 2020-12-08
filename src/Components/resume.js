import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import './resume.css'
import DavidDesk from '../images/desk.JPG'

class Resume extends Component {
    render() {
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
                    <Cell col={4} className='resume-right-col'>Right Side</Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume

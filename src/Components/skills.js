import React, { Component } from 'react'
import './skills.css'
import 'semantic-ui-css/semantic.min.css'
import { Progress, Segment } from 'semantic-ui-react'

class Skills extends Component {
    render() {
        return (
            <div className="skills" id={"skills"}>
                <h1>Skills</h1>
                    <Segment inverted>
                        <div className='advance_level'>
                        <Progress value={5} total={5}  inverted color='green' label='advance' />
                        </div>
                        <div className='intermediate_level'>
                        <Progress value={3} total={5}  inverted color='yellow' label='intermediant'/>
                        </div>
                        <div className='novice_level'>
                        <Progress value={1} total={5} inverted color='orange' label='Novice' />
                        </div>
                        <Progress value={4} total={5} active='true' inverted color='green' label='JavaScript'  />
                        <Progress value={4} total={5} active='true' inverted color='green' label='React' />
                        <Progress value={4} total={5} active='true' inverted color='green' label='Ruby'  />
                        <Progress value={4} total={5} active='true' inverted color='green' label='Ruby on Rails'  />
                        <Progress value={2} total={5} active='true' inverted color='yellow' label='Java'  />
                        <Progress value={1} total={5} active='true' inverted color='orange' label='Swift'  />
                        <Progress value={2} total={5} active='true' inverted color='yellow' label='SQLite'  />
                        <Progress value={1} total={5} active='true' inverted color='orange' label='PostgreSQL'  />
                        <Progress value={4} total={5} active='true' inverted color='green' label='HTML'  />
                        <Progress value={4} total={5} active='true' inverted color='green' label='CSS'  />
                        <Progress value={4} total={5} active='true' inverted color='green' label='GitHub'  />
                        
                    </Segment>
            </div>
        )
    }
}

export default Skills
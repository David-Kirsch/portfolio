import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

class Education extends Component {
    render(){
        return(
            <Grid>
                <Cell col={4}>
                    <p>{this.props.schoolDetails.gradDate}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.schoolDetails.schoolName}</h4>
                    <p>{this.props.schoolDescription}</p>
                </Cell>
            </Grid>
        )
            
        
    }
}

export default Education
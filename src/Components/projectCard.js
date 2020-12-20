import React from 'react'
import {Card, CardTitle, CardText } from 'react-mdl'

const projectCard = (props) => {
    return (
        <div className='projects-grid'>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <h3>{props.data.name}</h3>
                <CardTitle style={{color: 'white', height: '240px', background: 
                `url(${props.data.img}) center/64% no-repeat` }}></CardTitle>
                <CardText>
                    {props.data.desc}<br/>
                    <p/>
                    <strong>Built using: {props.data.stack}</strong>
                </CardText>
                <hr/>
                <div border className='project-links'>
                    {props.data.frontend && props.data.backend ? <div className='git'>GitHub<div><a rel="noreferrer" target="_blank" href={props.data.frontend}>Frontend</a><a rel="noreferrer" target="_blank" href={props.data.backend}>Backend</a></div></div>: 
                    props.data.frontend ? <a rel="noreferrer" target="_blank" href={props.data.frontend}>GitHub</a> : null} 
                    {props.data.demo ? <a rel="noreferrer" target="_blank" href={props.data.demo}>Demo</a> : null }
                    {props.data.website ? <a rel="noreferrer" target="_blank" href={props.data.website}>Website</a> : null}
                </div>
            </Card>
        </div>
    )
}

export default projectCard

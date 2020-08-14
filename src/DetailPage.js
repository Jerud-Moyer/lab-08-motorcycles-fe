/* eslint-disable */
import React, { Component } from 'react';
import { fetchCycle } from './motorcycle-api.js';


export default class DetailPage extends Component {
    state = {
        motorcycle: {}
    }

    componentDidMount = async () => {
        const data = await fetchCycle(this.props.match.params.id)

        this.setState({
            motorcycle: data.body
        })
    }
    
    
    render() {
        return (
            <div className='result-box'>
                <h1>Check out your rad motorcycle!</h1>
                {`model - ${this.state.motorcycle.model}`} <br/> {`make - ${this.state.motorcycle.manufacturer}`}<br/> {`type - ${this.state.motorcycle.type}`}<br/>  {`this bike is fast! - ${this.state.motorcycle.is_fast}`}<br/> {`engine size - ${this.state.motorcycle.ccs}`}
            </div>
        )
    }
}

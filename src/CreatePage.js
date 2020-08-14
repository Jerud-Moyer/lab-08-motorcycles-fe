/* eslint-disable */
import React, { Component } from 'react';
import { createMotorcycle } from './motorcycle-api.js';
import './App.css';

export default class CreatePage extends Component {
    state = {
        model: '',
        manufacturer: '',
        type: '',
        is_fast: false,
        ccs: null,
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await createMotorcycle({
            model: this.state.model,
            manufacturer: this.state.manufacturer,
            type: this.state.type,
            is_fast: this.state.is_fast,
            ccs: this.state.ccs
        });

        this.setState({ 
        model: '',
        manufacturer: '',
        type: '',
        is_fast: false,
        ccs: null,
        });
    }



    handleModelChange = e => {
        this.setState({ model: e.target.value });
    }

    handleManufacturerChange = e => {
        this.setState({ manufacturer: e.target.value });
    }

    handleTypeChange = e => {
        this.setState({ type: e.target.value });
    }

    handleIsFastChange = e => {
        this.setState({ is_fast: e.target.checked });
    }

    handleCcsChange = e => {
        this.setState({ ccs: e.target.value });
    }

    render() {
        return (
            <div className='create-content'>
                <h2>Create a bike!</h2>
                <h3>or add one from the real world</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Model:
                        <input onChange={this.handleModelChange} value={this.state.model} />
                    </label>
                    <label>
                        Manufacturer:
                        <input onChange={this.handleManufacturerChange} value={this.state.manufacturer} />
                    </label>
                    <label>
                        Type:
                        <input onChange={this.handleTypeChange} value={this.state.type} />
                    </label>
                    <label>
                        Is it fast?
                        <input type="checkbox" checked={this.state.is_fast} onChange={this.handleIsFastChange} />
                    </label>
                    <label>
                        CCS:
                        <input onChange={this.handleCcsChange} type="number" value={this.state.ccs} />
                    </label>
                    <button>Add Bike!</button>

                </form>
                
            </div>
        )
    }
}

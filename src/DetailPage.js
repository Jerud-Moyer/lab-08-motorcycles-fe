/* eslint-disable */
import React, { Component } from 'react';
import { fetchCycle, deleteMotorcycle, updateMotorcycle, fetchEngines } from './motorcycle-api.js';

export default class DetailPage extends Component {
    state = {
        motorcycle: {},
        model: '',
        manufacturer: '',
        type: '',
        is_fast: false,
        engine_id: 1,
        engines: [],
        ccs: 0,

    }
    

    componentDidMount = async () => {
        const data = await fetchCycle(this.props.match.params.id)
        console.log(data);
        const enginesData = await fetchEngines();

        console.log(enginesData.body)
        const matchingEngine = enginesData.body.find(engine => engine.id === Number(data.body.engine_type_id));
        this.setState({
            engines: enginesData.body,
            motorcycle: data.body,
            model: data.body.model,
            manufacturer: data.body.manufacturer,
            type: data.body.type,
            is_fast: data.body.is_fast,
            ccs: data.body.ccs,
            engine: matchingEngine.id,
        })
    }

    handleSubmit = async (e) => {
        console.log(this.state.engine_id)
        e.preventDefault();

        try {
            await updateMotorcycle(
                this.props.match.params.id,
                {
                    model: this.state.model,
                    manufacturer: this.state.manufacturer,
                    type: this.state.type,
                    is_fast: this.state.is_fast,
                    ccs: this.state.ccs,
                    engine_id: this.state.engine_id,
                }
                );
                
                const updatedMotorcycle = await fetchCycle(this.props.match.params.id)
                
                this.setState({
                    model: '',
                    manufacturer: '',
                    type: '',
                    is_fast: false,
                    ccs: 0,
                    engine_id: 0,
                    motorcycle: updatedMotorcycle.body,
                });
                this.props.history.push('/');
            } catch {
                console.log(e.message)
            }
    }

    handleModelChange = e => {
        this.setState({ model: e.target.value })
    }

    handleMunufacturerChange = e => {
        this.setState({ manufacturer: e.target.value })
    }

    handleTypeChange = e => {
        this.setState({ type: e.target.value })
    }

    handleIsFastChange = e => {
        this.setState({ is_fast: e.target.checked })
    }

    handleCcsChange = e => {
        this.setState({ ccs: e.target.value })
    }
    
    handleEngineChange = e => {
        this.setState({ engine_id: e.target.value })
    }

    handleDelete = async () => {
        await deleteMotorcycle(this.props.match.params.id);

        this.props.history.push('/');
    }
    
    render() {
        
        return (
            <div className='result-box'>
                <div>
                <h1 className='rad'>Check out your rad motorcycle!</h1>
                {`model - ${this.state.motorcycle.model}`} <br/> {`make - ${this.state.motorcycle.manufacturer}`}<br/> {`type - ${this.state.motorcycle.type}`}<br/>  {`this bike is fast! - ${this.state.motorcycle.is_fast}`}<br/> {`engine type - ${this.state.engine}`}<br/> {`engine size - ${this.state.motorcycle.ccs}`}
                </div>
                <h3>Edit your Motorcycle?</h3>
                <div>
                    <form className='detail-form' onSubmit={this.handleSubmit}>
                        <label>
                            Model:
                            <input onChange={this.handleModelChange} value={this.state.model} />
                        </label>
                        <label>
                            Manufacturer:
                            <input onChange={this.handleMunufacturerChange} value={this.state.manufacturer} />
                        </label>
                        <label>
                            Type:
                            <input onChange={this.handleTypeChange} value={this.state.type} />
                        </label>
                        <label>
                            Is it fast?
                            <input type='checkbox' checked={this.state.is_fast} onChange={this.handleIsFastChange} />
                        </label>
                        <label>
                            ccs:
                            <input onChange={this.handleCcsChange} value={this.state.ccs} />
                        </label>
                        <label>
                            Engine:
                            <select onChange={this.handleEngineChange} value={this.state.engine_id}>
                                {
                                    this.state.engines.map((engine) => <option key={engine.id} value={engine.id}>{engine.type}</option>)
                                }
                            </select>
                        </label>
                        <button>Update Motorcycle</button>
                    </form>
                    <button onClick={this.handleDelete}>Delete</button>
                </div>
            </div>
        )
    }
}

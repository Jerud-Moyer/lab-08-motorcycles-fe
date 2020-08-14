/* eslint-disable */
import React from 'react';
import { fetchCycles } from './motorcycle-api.js';
import './App.css';
import { Link } from 'react-router-dom';

class App extends React.Component {
  state = {
    motorcycles: []
  }

  componentDidMount = async () => {
    const data = await fetchCycles()
    console.log(data)
    this.setState({
      motorcycles: data.body
    })
  }

  render() {
  return (
    <div className="App">
      <h2>Motorcycles:</h2>
      {
        this.state.motorcycles.map((motorcycle) => {
          return <Link className='bike-box' to={`/detail/${motorcycle.id}`} key={`${motorcycle.id}-${motorcycle.model}`}>
            {`model - ${motorcycle.model}`} <br/> {`make - ${motorcycle.manufacturer}`}<br/> {`type - ${motorcycle.type}`}<br/>  {`this bike is fast! - ${motorcycle.is_fast}`}<br/> {`engine size - ${motorcycle.ccs}`}
            </Link>
        })
      }
      
        
    </div>
  )
}
}
export default App;

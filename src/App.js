/* eslint-disable */
import React from 'react';
import { fetchCycles } from './motorcycle-api.js';
import './App.css';

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
          return <div className='bike-box'>
            {`model - ${motorcycle.model}`} {`| make - ${motorcycle.manufacturer}`} {`| type ${motorcycle.type}`}  {`| this bike is fast! - ${motorcycle.is_fast}`} {`| engine size - ${motorcycle.ccs}`}
            </div>
        })
      }
      
        
    </div>
  )
}
}
export default App;

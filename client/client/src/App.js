import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {mesh: {}}

  componentDidMount() {
    fetch('/mesh?lat=4&long=2')
      .then(res => res.json())
      .then(mesh => this.setState({ mesh }));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <title>Meshblock Analysis</title>
        </header>
        <p className="App-intro">
          {this.state.mesh.numberOfFamilies}
        </p>
      </div>
    );
  }
}

export default App;

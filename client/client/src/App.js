import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

class App extends Component {
  state = {mesh: {}}
  

  componentDidMount() {
    fetch('/mesh?lat=4&long=2')
      .then(res => res.json())
      .then(mesh => this.setState({ mesh }));
  }
  render() {
    const Map = ReactMapboxGl({ accessToken:'pk.eyJ1Ijoic2F2aW5ncHZ0cnlhbiIsImEiOiJjamt6YWpxaXgwczZ2M3BvNnh3dDIzb3VlIn0.qheYYbnMlTV-w04LkzKfMw' });
    const zoom = [8];
    return (
      <div className="App">
        <header className="App-header">
          <title>Meshblock Analysis</title>
        </header>
        <p className="App-intro">
          {this.state.mesh.numberOfFamilies}
        </p>
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: "100vh",
            width: "100vw"
          }}>
            <Layer
              type="symbol"
              id="marker"
              layout={{ "icon-image": "marker-15" }}>
              <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
            </Layer>
        </Map>
      </div>
    );
  }
}


export default App;

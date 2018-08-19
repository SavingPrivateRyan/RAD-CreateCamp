import 'mapbox-gl/dist/mapbox-gl.css';
import React, { Component } from 'react';
import './App.css';
import MapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2F2aW5ncHZ0cnlhbiIsImEiOiJjamt6YWpxaXgwczZ2M3BvNnh3dDIzb3VlIn0.qheYYbnMlTV-w04LkzKfMw';

class App extends Component {
  state = {mesh: {}}

  componentDidMount() {
    window.addEventListener("resize", this._resize.bind(this));
    this._resize();

    fetch('/mesh?lat=4&long=2')
      .then(res => res.json())
      .then(mesh => this.setState({ mesh }));
  }

  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };

  mapRef = React.createRef();

  _resize() {
    this._onViewportChange({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  _onViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    });
  };

  render() {
    return (
      <div>
      <header className="App-header">
      <title>Meshblock Analysis</title>
    </header>
    <p className="App-intro">
      {/* {this.state.mesh.numberOfFamilies} */}
    </p>

      <MapGL
        ref={this.mapRef}
        {...this.state.viewport}
        onViewportChange={this._onViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Geocoder mapRef={this.mapRef} onViewportChange={this._onViewportChange} mapboxApiAccessToken={MAPBOX_TOKEN} />
      </MapGL>
      </div>
    );
  }
}


export default App;

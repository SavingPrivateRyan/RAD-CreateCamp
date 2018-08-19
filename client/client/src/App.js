import 'mapbox-gl/dist/mapbox-gl.css';
import React, { Component } from 'react';
import './App.css';
import MapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import logo from './logo.svg';
import meshdname from './meshdname.svg';
const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2F2aW5ncHZ0cnlhbiIsImEiOiJjamt6YWpxaXgwczZ2M3BvNnh3dDIzb3VlIn0.qheYYbnMlTV-w04LkzKfMw';

class App extends Component {

  componentDidMount() {
    window.addEventListener("resize", this._resize.bind(this));
    this._resize();
  }

  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 15
    },
    mesh: {}
  };

  mapRef = React.createRef();

  _resize() {
    this._onViewportChange({
      width: window.innerWidth * 0.98,
      height: 500
    })
  }

  _onViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    });

    if (this.state.viewport.longitude > 172 & this.state.viewport.longitude < 180) {
      fetch('/mesh?lat=4&long=7')
      .then(res => res.json())
      .then(mesh => this.setState({ mesh }));
    }
  };

  renderData() {
    if (Object.keys(this.state.mesh).length !== 0) {
      return (
        <div>
          <div>
        <h2 className="centered">Statistics about meshblock</h2>
        </div>
        <div className="circleCentral centered">
      <div className="circle centered">
        <div>
          {this.state.mesh.numberOfFamilies}
          <div className="smalltext">
            Total number of families
        </div>
        </div>
      </div>
      <div className="circle centered">
        <div>
          {this.state.mesh.couplesNoChildren}
          <div className="smalltext">
            Total number of couples with no children
        </div>
        </div>
      </div>
      <div className="circle centered">
        <div>
          {this.state.mesh.couplesWithChildren}
          <div className="smalltext">
            Total number of couples with children
        </div>
        </div>
      </div>
    </div>
    </div>)
    }
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={meshdname} className="App-logo" alt="logo" />
          <title>Meshblock Analysis</title>
        </header>
        <div className="centered">
          <h1>Welcome to Mesh'd!</h1>
        </div>
        <div className="centered margin-bottom-small">
          To start, please enter a street address inside the search bar and
          we will show you statistics about the house's mesh block.
        </div>
       {this.renderData()}
        <div className="mapCentral mapCentered">
          <MapGL
            mapStyle = "mapbox://styles/mapbox/streets-v9"
            ref={this.mapRef}
            {...this.state.viewport}
            onViewportChange={this._onViewportChange}
            mapboxApiAccessToken={MAPBOX_TOKEN}
          >
            <Geocoder mapRef={this.mapRef} onViewportChange={this._onViewportChange} mapboxApiAccessToken={MAPBOX_TOKEN} />
          </MapGL>
        </div>
      </div >
    );
  }
}


export default App;

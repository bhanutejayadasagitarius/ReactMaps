import React from 'react';
import './App.css';

import { gMapApiUrl } from './config';

import MyMapComponent from './MyMapComponent';


class App extends React.Component {


  constructor() {
    super()
  }


  render() {
    return (
      <div className="App">
        <h3>Google Maps Testing</h3>
        <MyMapComponent
          isMarkerShown
          googleMapURL={gMapApiUrl}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `90vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }


}

export default App;

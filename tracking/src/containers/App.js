import React from 'react'
import VesselTrackingPage from './VesselTrackingPage'

import logo from '../images/logo.svg'
import './App.css'

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">React Vessel Tracking App</h1>
    </header>
    <main>
      <VesselTrackingPage />
    </main>
  </div>
)

export default App;

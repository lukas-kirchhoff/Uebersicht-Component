import React, { Component } from 'react';
import './App.css';
import Overview from "./Overview";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
        <Overview />
        </div>
      </div>
    );
  }
}

export default App;
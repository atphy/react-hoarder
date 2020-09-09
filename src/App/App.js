import React from 'react';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <nav></nav>
        <h1 className="title">HOARDER</h1>
        <button className="btn btn-info login-btn">Start Hoarding</button>
      </div>
    );
  }
}

export default App;

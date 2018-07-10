import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="bg"></div>
        <header className="brand">
          
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="footer">
          <ul>
            <li><span role="img"aria-label="Hand">👋</span> <a href="https://www.meetup.com/reactbris">Submit a Talk</a></li>
            <li><span role="img"aria-label="Cal">📅</span> <a href="https://github.com/reactbris/meetup">Meetup Events</a></li>
            <li><span role="img"aria-label="Bird">🐦</span> <a href="https://twitter.com/reactbris">Twitter</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;

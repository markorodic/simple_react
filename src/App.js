import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div style={{padding: '15px'}}>
          <Profile />
        </div>
    )
  }
}

class Profile extends React.Component {
  render() {
    return (
      <div>
        <h1>Mark</h1>
        <img src="https://avatars.githubusercontent.com/perborgen?s=240" />
      </div>
    )
  }
}

export default App;

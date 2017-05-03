import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
        <div style={{padding: '15px'}}>
          <Profile />
          <Hobbies />
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

class Hobbies extends React.Component {
  render(){
    return (
      <div>
        <h3>My hobbies:</h3>
        <ul>
          <li>Eat</li>
          <li>Sleep</li>
          <li>Code</li>
        </ul>
      </div>    
    )
  }
}

export default App;

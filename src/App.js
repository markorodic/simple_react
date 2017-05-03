import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const DATA = {
  name: "Roger",
  imgURL: "https://avatars.githubusercontent.com/perborgen?s=240",
  hobbyList: ["Eat", "Sleep", "Code"]
}

class App extends React.Component {
  render() {
    return (
        <div style={{padding: '15px'}}>
          <Profile myData={DATA} />
          <Hobbies myData={DATA}/>
        </div>
    )
  }
}

class Profile extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.myData.name}</h1>
        <img src={this.props.myData.imgURL} />
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
          {
            this.props.myData.hobbyList.map((item, index) =>
              <li key={index}>{item}</li>
            )
          }
        </ul>
      </div>    
    )
  }
}

export default App;

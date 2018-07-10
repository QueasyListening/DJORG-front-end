import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import MyNotes from './components/MyNotes';

class App extends Component {

  state = {
    publicNotes: [
      {
        id:1,
        title: 'test1',
        content: 'Content test 1'
      },
      {
        id:2,
        title: 'test2',
        content: 'Content test 2'
      },
      {
        id:3,
        title: 'test3',
        content: 'Content test 3'
      },
    ],
    privateNotes: []
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <Route exact path='/' render={(props) => <MyNotes {...props} notes={this.state.publicNotes}/>}/>
        </div>
      </div>
    );
  }
}

export default App;

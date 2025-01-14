import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <News pageSize={6} apiKey={'bfa12e5b64c94fa88435059c78a8375d'} country={'us'}/>
      </div>
    )
  }
}

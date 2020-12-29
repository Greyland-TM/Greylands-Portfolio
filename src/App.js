import React, { Component } from 'react';
import Navigation from './Components/Navbar/Navbar';
import Layout from './Components/Layout/Layout';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App-Back'>
        <Navigation></Navigation>
        <Layout></Layout>
      </div>
    );
  }
  
}

export default App;

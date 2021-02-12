import React, {Component} from 'react';


import Main from './components/Main/Main'
import {BrowserRouter as Router} from 'react-router-dom';
export default class App extends Component {
  onSelect(event){
    console.log(event);
  }
  componentDidMount(){
    
  }
  render() {
    return (
      <div className="App">
        <Router>
        <Main/>
        </Router>
      </div>
    );
  }
}
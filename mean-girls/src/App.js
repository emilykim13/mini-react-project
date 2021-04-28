import logo from './logo.svg';
import './App.css';

import React from "react";

class App extends React.Component {
  state = {
    characters: []
  };

  componentDidMount(){
    console.log("working?")

    fetch("http://localhost:3001/characters")
    .then(res => res.json())
    .then(characterData => {
      this.setState({characters:characterData})
    })
  };

  render() {
    return <h1>Render h1</h1>
  }
}
export default App;

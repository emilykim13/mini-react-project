import logo from './logo.svg';
import './App.css';
import CharacterHeader from "./CharacterHeader";
import CharacterForm from "./CharacterForm";
import CharacterCard from "./CharacterCard";
import Section from "./Section";

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
    return (
      <div className="App"> 
        <h1>hi</h1>
        {/* <CharacterHeader />
        <CharacterForm />
        <Section /> */}
      </div>
    // either in the burn book or not 
    )
  }
}
export default App;

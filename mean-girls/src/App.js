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

  addCharacter = (characterArg) => {
    // console.log(characterArg)

    let reqPackage = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(characterArg)
    }
    fetch('http://localhost:3001/characters', reqPackage)
    .then(res => res.json())
    .then(postedCharacter => {
      this.setState({
        characters: [...this.state.characters, postedCharacter],
      });
    })

  };



  render() {
    return (
      <div className="App"> 
        {/* <h1>hi</h1> */}
        <CharacterHeader />
        <CharacterForm newCharacter={this.addCharacter}/>
        <Section 
          name="Not Burned"
          charactersArr={this.state.characters.filter(
            (character) => character.burned === false
          )}
        />
        <Section 
          name="Burned"
          charactersArr={this.state.characters.filter(
            (character) => character.burned === true
          )}
        />
      </div>
    // either in the burn book or not 
    )
  }
}
export default App;

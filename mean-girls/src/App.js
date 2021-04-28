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


  burnCharacter = (character) => {
    fetch(`http://localhost:3001/characters/${character.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      },
      body: JSON.stringify({
        burned: !character.burned
      })
    })
    .then(res => res.json())
    .then(burnedCharacter => {
      this.setState({
        characters: this.state.characters.map((character) => character.id === burnedCharacter.id ? burnedCharacter : character)
      })
    })

  }

  deleteCharacter = (characterX) => {
    fetch(`http://localhost:3001/characters/${characterX.id}`, {
      method: "DELETE"
    })
    this.setState({
      characters: this.state.characters.filter((character) => {return character != characterX})
    })
  }


  render() {
    return (
      <div className="App"> 
        <CharacterHeader />
        <CharacterForm newCharacter={this.addCharacter}/>
        <Section 
          name="SAFE"
          charactersArr={this.state.characters.filter(
            (character) => character.burned === false
          )}
          burnCharacter={this.burnCharacter}
          deleteCharacter={this.deleteCharacter}
        />
        <Section 
          name="BURNED"
          charactersArr={this.state.characters.filter(
            (character) => character.burned === true
          )}
          burnCharacter={this.burnCharacter}
          deleteCharacter={this.deleteCharacter}
        />
      </div>
    // either in the burn book or not 
    )
  }
}
export default App;

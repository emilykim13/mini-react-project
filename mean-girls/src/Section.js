import React from 'react'
import CharacterCard from "./CharacterCard"

const Section = (props) => {
    let backgroundStyle = () => {
        if(props.name == "SAFE"){
            return {backgroundColor: 'pink'}
        }else{
            return {backgroundColor: 'black',
            color: "red"
        }
        }
    }


    return (
        <div style={backgroundStyle()}>
            <h1>{props.name}</h1>
            {/* {console.log("props in Section.js", props)} */}
            {props.charactersArr.map((character) => {
                return <CharacterCard character={character} burnCharacter={props.burnCharacter} deleteCharacter={props.deleteCharacter}/>
            })}
        </div>
    )
}

export default Section
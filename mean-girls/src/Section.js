import React from 'react'
import CharacterCard from "./CharacterCard"

const Section = (props) => {
    let backgroundStyle = () => {
        if(props.name == "Not Burned"){
            return {backgroundColor: 'green'}
        }else{
            return {backgroundColor: 'red'}
        }
    }


    return (
        <div style={backgroundStyle()}>
            <h1>{props.name}</h1>
            {console.log("props in Section.js", props)}
        </div>
    )
}

export default Section
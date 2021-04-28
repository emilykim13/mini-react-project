import React from 'react'

class CharacterCard extends React.Component {

    clickHandler = () => {
        console.log("testing")
    }

    render(){
        // console.log(this.props.character.image)
        return(
            <div className='card' onClick = {() => this.props.burnCharacter(this.props.character)}>
                <h3>{this.props.character.name}</h3>
                <p>{this.props.character.quote}</p>
                <img src={this.props.character.image} style={{width:"250px"}}></img>
                <br/>
                {/* <button onClick={this.clickHandler}>Click</button> */}
                <br/>
                <br/>
            </div>
        )
    }
}

export default CharacterCard
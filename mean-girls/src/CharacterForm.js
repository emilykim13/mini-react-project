import React, {Component} from 'react'

class CharacterForm extends Component {

    submitHandler = (e) => {
        e.preventDefault()
        let newName = e.target[0].value
        let newImage = e.target[1].value
        let newQuote = e.target[2].value
        
        let newCharacter = {
            name: newName,
            image: newImage,
            quote: newQuote,
            burned: false
        }

        e.target.reset()

        this.props.newCharacter(newCharacter)
    }

    render(){
        return(
        <form onSubmit={this.submitHandler}>
            <label>Character Name</label>
            <input type='text' placeholder='name'/>
            <br/>
            <label>Character Image URL</label>
            <input type='text' placeholder='image'/>
            <br/>
            <label>Character Quote</label>
            <input type='text' placeholder='quote'/>
            <br/>
            <input type='submit'value='Create'/>

        </form>
        )
    }
}

export default CharacterForm
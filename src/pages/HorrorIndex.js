import React, { Component } from 'react'
import characters from '../mockHorrorCharacters'

class HorrorIndex extends Component {
  render() {
    return (
      <>

        <h3>I am the HorrorIndex</h3>
        {this.props.characters && this.props.characters.map(characters=>{
          return(
            <h2 key={characters.id}>{characters.name}</h2>
          )
        })}
      </>
    )
  }
}
export default HorrorIndex
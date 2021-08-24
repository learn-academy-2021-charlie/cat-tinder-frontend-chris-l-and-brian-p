import React, { Component } from 'react'
import characters from '../mockHorrorCharacters'
import { NavLink } from 'react-router-dom'

class HorrorIndex extends Component {
  render() {
    return (
      <>

        <h3>I am the HorrorIndex</h3>
        {this.props.characters && this.props.characters.map(characters=>{
          return(
            <ul>
            <NavLink to={`/horrorshow/${characters.id}`}>{characters.name}</NavLink>
            </ul>
          )
        })}
      </>
    )
  }
}
export default HorrorIndex
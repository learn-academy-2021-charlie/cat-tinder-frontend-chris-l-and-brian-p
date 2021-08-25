import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class HorrorIndex extends Component {
  render() {
    let { characters } = this.props
    return (
      <>

        <h3>I am the HorrorIndex</h3>
        {characters && this.props.characters.map(characters=>{
          return(
            <ul key={characters.id}>
            <NavLink to={`/horrorshow/${characters.id}`}>{characters.name}</NavLink>
            </ul>
          )
        })}
      </>
    )
  }
}
export default HorrorIndex
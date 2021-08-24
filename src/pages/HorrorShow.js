import React, { Component } from 'react'

class HorrorShow extends Component {
  render() {
    console.log(this.props.character)
    return (
      <>
       <h2>This is {this.props.character.name}.</h2> 
       <h2>He is {this.props.character.age} years old.</h2> 
       <h2>He enjoys {this.props.character.enjoys}.</h2> 
      </>
    )
  }
}
export default HorrorShow
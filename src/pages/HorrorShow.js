import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {Button, Card, CardTitle, CardText} from 'reactstrap'

class HorrorShow extends Component {
  render() {
    let {character} =this.props
    return (
      <div>
      {character &&
       <Card>
         <CardTitle>Hi! My name is {character.name}</CardTitle>
         <CardText>I am {character.age} years old</CardText>
         <CardText>I enjoy {character.enjoys}</CardText>
         <NavLink to={`/horroredit/${character.id}`}>
           <Button>Edit Character Profile</Button>
         </NavLink>
       </Card>
      }
    </div>
  )
}
}
export default HorrorShow
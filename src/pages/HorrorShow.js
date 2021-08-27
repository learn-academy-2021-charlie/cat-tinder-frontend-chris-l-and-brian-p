import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {Button, Card, CardTitle, CardText} from 'reactstrap'

class HorrorShow extends Component {
  render() {
    let {character} =this.props
    return (
      <div className="page-body">
       {character &&
        <Card body className="card-show">
          <CardTitle tag="h5">Hi! My name is {character.name}</CardTitle>
          <h2></h2>
          <CardText>I am {character.age} years old</CardText>
          <CardText>I enjoy {character.enjoys}</CardText>
          <NavLink to={`/horroredit/${character.id}`}>
            <Button>Edit Character Profile</Button>
          </NavLink>
          <br />
          <NavLink to="/horrorindex">
            <Button onClick={ () => this.props.deleteCharacter(character.id) }>
              Delete Character Profile
            </Button>
          </NavLink>
        </Card>
       }
     </div>
  )
}
}
export default HorrorShow
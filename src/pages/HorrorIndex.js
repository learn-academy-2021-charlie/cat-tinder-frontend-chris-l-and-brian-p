import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Button, CardTitle, Row, Col } from 'reactstrap'

class HorrorIndex extends Component {
  render() {
    let { characters } = this.props
    return (
      <div className="page-body">
        <h3>Meet the Characters</h3>
        <div className="index-cards">
          {characters && characters.map(character => {
            return (
              <Row key={character.id}>
                <Col sm="6">
                  <Card body>
                    <CardTitle tag="h5">Hi, my name is {character.name}</CardTitle>
                    
                    <NavLink to={`/horrorshow/${character.id}`}><Button>More Info Here</Button></NavLink>
                  </Card>
                </Col>
              </Row>
            )
          })}
        </div>
      </div>
    )
  }
}
export default HorrorIndex
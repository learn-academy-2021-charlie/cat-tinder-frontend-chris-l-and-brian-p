import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {Form,FormGroup,Input,Label, Button} from 'reactstrap'

class HorrorEdit extends Component {
  constructor (props){
    super(props)
    this.state ={
    form: {
      name: "",
      age: "",
      enjoys: ""
        },
        submitted: false
      }
    }
  
  handleChange =(e) => {
    let {form} = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form})
  }
  handleSubmit = () => {
    this.props.updateCharacter(this.state.form, this.props.character.id)
    this.setState({ submitted: true})
  }
  render() {
    return (
      <>
      <h1>I am HorrorEdit</h1> 
      <Form>
  <FormGroup>
    <Label>Name</Label>
    <Input
      type="text"
      name="name"
      onChange={this.handleChange}
      value={this.state.form.name}
    />
  </FormGroup>
  <FormGroup>
    <Label>Age</Label>
    <Input
      type="text"
      name="age"
      onChange={this.handleChange}
      value={this.state.form.age}
    />
  </FormGroup>
  <FormGroup>
    <Label>Enjoys</Label>
    <Input
      type="text"
      name="enjoys"
      onChange={this.handleChange}
      value={this.state.form.enjoys}
    />
  </FormGroup>
</Form>
<Button
  name="submit"
  onClick={ this.handleSubmit }
>
  Edit Character Profile
</Button>
{this.state.submitted && <Redirect to={`/horrorshow/${this.props.character.id}`} /> }
      </>
    )
  }
}
export default HorrorEdit
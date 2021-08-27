import React, { Component } from 'react'
import { Button, Input, Form, FormGroup, Label } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class HorrorNew extends Component {
  constructor(props){
    super(props)
    this.state = {
      form:{
        name: "",
        age: "",
        enjoys: "",
      },
      success: false
    }
  }

  handleChange = (e) => {
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }

  handleSubmit = () => {
    this.props.createNewCharacter(this.state.form)
    this.setState({ success: true})
  }

  render() {
    return (
      <>
        <h3>Create a new Character</h3>
        <Form>
          <FormGroup>
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              onChange={ this.handleChange }
              value={ this.state.form.name }
              />
          </FormGroup>
          <br />
          <FormGroup>
            <Label>Age</Label>
            <Input
              type="text"
              name="age"
              onChange={ this.handleChange }
              value={ this.state.form.age }
              />
          </FormGroup>
          <br />
          <FormGroup>
            <Label>Enjoys</Label>
            <Input
              type="text"
              name="enjoys"
              onChange={ this.handleChange }
              value={ this.state.form.enjoys }
              />
          </FormGroup>
        </Form>
        <br />
        <Button
          name="submit"
          onClick={ this.handleSubmit }
        >
          Create a New Profile
        </Button>
        { this.state.success && <Redirect to="/horrorindex" />}
      </>
    )
  }
}
export default HorrorNew
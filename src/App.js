
import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import HorrorEdit from './pages/HorrorEdit'
import HorrorIndex from './pages/HorrorIndex'
import HorrorNew from './pages/HorrorNew'
import HorrorShow from './pages/HorrorShow'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import './App.css'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        characters: []
      }
    }

    componentDidMount(){
      this.characterIndex()
    }

    characterIndex = () => {
      fetch("http://localhost:3000/characters")
      .then(response => response.json())
      .then(charactersArray => this.setState({ characters: charactersArray}))
      .catch(errors => console.log("character read errors:", errors))
    }

    createNewCharacter = (newCharacter) => {
     fetch("http://localhost:3000/characters", {
       body:JSON.stringify(newCharacter),
       headers:{
         "Content-Type": "application/json"
       },
       method:"POST"
     })
     .then(response => response.json())
     .then(payload => this.characterIndex())
     .catch(errors => console.log("character create errors:", errors))
    }
    
    updateCharacter = (editCharacter, id) => {
      fetch(`http://localhost:3000/characters/${id}`, {
        body: JSON.stringify(editCharacter),
        headers: {
          "Content-Type": "application/json"
        },
        method: "PATCH"
      })
      .then(response => response.json())
      .then(payload => this.characterIndex())
      .catch(errors => console.log("Character update errors:", errors))
    }

    deleteCharacter = (id) => {
      fetch(`http://localhost:3000/characters/${id}`, {
        headers: {
          "Content-Type": "application/json"
        },
        method: "DELETE"
      })
      .then(response => response.json())
      .then(payload => this.characterIndex())
      .catch(errors => console.log("Character delete fetch errors:", errors))
    }

    render() { 
      console.log(this.state.characters)
    return (
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/horrorindex" render={(props) => <HorrorIndex characters={ this.state.characters } /> } 
          /> 
          <Route path="/horrorshow/:id" render={ (props) => {
            let id = props.match.params.id
            let character = this.state.characters.find(character => character.id === +id)
            return <HorrorShow character={ character } deleteCharacter={ this.deleteCharacter } />
          }} />
          <Route path={"/horroredit/:id"} render={ (props) => {
            let id = props.match.params.id
            let character = this.state.characters.find(character => character.id === +id)
            return <HorrorEdit updateCharacter={ this.updateCharacter } character={ character } />
          }} /> 
          <Route path="/horrornew" render={ (props) => <HorrorNew createNewCharacter={ this.createNewCharacter} /> } 
          />
          <Route component={NotFound} />
        </Switch>

        <Footer />
      </Router>
    )
  }
}

export default App;
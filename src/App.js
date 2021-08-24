
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
import characters from './mockHorrorCharacters.js'

class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        characters: characters
      }
    }
    render() { 
      console.log(this.state.characters)
    return (
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/horrorindex" component={HorrorIndex} />
          <Route path="/horrorshow" component={HorrorShow} />
          <Route path="/horroredit" component={HorrorEdit} />
          <Route path="/horrornew" component={HorrorNew} />
          <Route component={NotFound} />
        </Switch>

        <Footer />
      </Router>
    )
  }
}

export default App;
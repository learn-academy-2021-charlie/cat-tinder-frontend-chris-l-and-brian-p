import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <footer>
        <h1>
        
          <NavLink to="/" className="nav-links">&copy; 2021 Chris Luna & Brian Pompa</NavLink>
          <NavLink to="/horrorindex" className="nav-links">Meet the Characters</NavLink>
          <NavLink to="/horrornew" className="nav-links">Add a Character</NavLink>
        
        </h1>
      </footer>
    )
  }
}
export default Footer
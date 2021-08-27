import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Header extends Component{ 
  render(){ 
  
    return (
      <header className="nav-links">
            <h1>

                <NavLink to="/" className="nav-links">Home</NavLink>
              <br />
                <NavLink to="/horrorindex" className="nav-links">Meet the Characters</NavLink>
              <br />
                <NavLink to="/horrornew" className="nav-links">Add a Character</NavLink>
            
            </h1>
      </header>
     )
      }
  }

export default Header; 
import React, { Component } from 'react';
import { NavLink } from 'reactstrap';

class Header extends Component{ 
  render(){ 
  
    return (
      <header>
            <h1>Horror Tinder</h1>
      
        <div className="nav-links">
          <ul>
            <NavLink to="/horrorindex">Meet the Characters</NavLink>
          </ul>
          <ul>
            <NavLink to="/horrornew">Add a Characters</NavLink>
          </ul>
        </div>
      </header>
     )
      }
  }

export default Header; 
import React, { Component } from 'react';
import './navbar.css'

class NavBar extends Component {
    render() {
  
      return (
  
        <div className="navbar">
            <div id="site-logo">⍟ trello clone</div>
            <div>
                <input type="button" id="signup" value="SIGN UP"/>
                <input type="button" id="login" value="LOG IN"/>
            </div>
          
  
        </div>
  
      );
  
    }
  
  }
  
  
  
  export default NavBar;
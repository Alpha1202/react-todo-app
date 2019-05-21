import React, { Component } from 'react';

class NavLinks extends Component {
  state = {  
     textDisplay: 'Home'
   }
  render() { 
    return ( 
      <div>
      {this.state.textDisplay}
      </div> );
  }
}
 
export default NavLinks;
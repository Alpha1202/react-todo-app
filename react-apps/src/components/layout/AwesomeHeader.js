// import React, { Component } from 'react';


// class AwesomeHeader extends Component {
//   render() { 
//     return ( 
//       <header>
//           <nav className="navbar navbar-dark bg-primary" >
//           <NavLinks />
//           <NavLinks />
//           <NavLinks />
//           </nav>
//       </header>
//      );
//   }
// }
 
import React from 'react';
import { Link } from 'react-router-dom';
// import NavLinks from '../NavLinks';

export default function AwesomeHeader() {
  return (
    < header className="bg-dark text-light text-center" >
      <h1>TodoList</h1>
      < Link className = "text-light text-decoration-none"
      to = "/" > Home </Link> | <Link className="text-light text-decoration-none" to="/about">About</Link>
    </header>
  )
}

//  export default AwesomeHeader; 
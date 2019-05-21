import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import MainContent from './components/MainContent';
import AwesomeHeader from './components/layout/AwesomeHeader';
import AwesomeFooter from './components/AwesomeFooter';
import About from './components/pages/About';

class App extends Component {
  render() { 
  return (
    <Router>
    <div> 
    <AwesomeHeader />
    <Route exact path="/" render={props => (
      <React.Fragment>
          <MainContent />
      </React.Fragment>
    )} />
    <Route path="/about" component={About} />
    <AwesomeFooter />
  </div>
  </Router>
    );
  }
}
 
export default App;






































// function App() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }
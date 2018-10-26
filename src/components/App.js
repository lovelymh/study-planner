import React, { Component } from 'react';
import './App.css';
import PageTemplate from './PageTemplate';
import NavList from './NavList';
import Loginfrom from './Loginform';

class App extends Component {

  render() {
    return (
      <div className="main-container">
        <div className="content">
          <PageTemplate navlist={(<NavList/>)}
            loginform={(<Loginfrom/>)}
            />
        </div>
        <footer>Copyright &copy; lovelymh</footer>
      </div>
    );
  }
}

export default App;

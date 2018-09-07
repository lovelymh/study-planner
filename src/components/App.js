import React, { Component } from 'react';
import './App.css';
import PageTemplate from './PageTemplate';
import NavList from './NavList';
import Loginfrom from './Loginform';
//import Calendar from './Calendar';
//import Calendar from 'react-calendar';
//import Calendarcc from 'react-calendar/dist/entry.nostyle';

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

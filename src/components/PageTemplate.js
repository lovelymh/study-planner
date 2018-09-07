import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './PageTemplate.css';
import Userpage from './Userpage';
import Mainpage from './Mainpage';


const PageTemplate = ({ loginform, navlist }) => {
  // <section className="login-wrapper">
  //   {loginform}
  // </section>
  // <section className="nav-wrapper">
  //   {navlist}
  // </section>
  return (
    <main className="page-main">
     <section className="route">
       <Route exact path="/" component={Mainpage}/>
       <Switch>
         <Route path="/user/:name" component={Userpage}/>
         <Route path="/user" component={Userpage}/>
       </Switch>
     </section>
    </main>
  );
}

export default PageTemplate;

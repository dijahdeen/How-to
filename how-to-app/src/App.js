import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link , Redirect} from 'react-router-dom';

import './App.css';

import LogInForms from './Components/Login';
import SignUp from "./Components/SignUp";
import Dashboard from "./Components/Dashboard";
import {AddHowTo} from "./Components/AddHowTo";
import PrivateRoute from "./Components/PrivateRoute";
import Nav from "./Components/Nav";
import {UpdateHowTo} from "./Components/UpdateHowTo";

function App() {
  return (
    // <Router>
      <div className="App">
        <Nav />


        <Switch>

          <PrivateRoute path='/add-how-to' component={AddHowTo} />
          <PrivateRoute path='/dashboard' component={Dashboard} />
          <PrivateRoute path='/update-howtos/:id' component={UpdateHowTo} />
          <Route path='/login' component={LogInForms} />
          <Route path='/signup' component={SignUp} />
          <Route path='/' component={LogInForms} />
          <Redirect from='/update-howtos/:id' to='/update-howtos/:id' />
        </Switch>
      </div>
    // </Router>
  );
}

export default App;

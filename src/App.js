import React from 'react';

import {Switch, BrowserRouter as Router, Route} from "react-router-dom";
import { GuardProvider, GuardedRoute } from 'react-router-guards';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {LandingPage} from "./pages/LandingPage"
import {SignIn} from "./pages/SignIn";
import {SignUp} from "./pages/SignUp";
import {Dashboard} from "./pages/Dashboard";
import {Loading} from "./pages/Loading";
 
import publicOnly from "./guards/publicOnly";
import auth from './guards/auth';

import { routes } from "./routes/routes";
import { drawRoutes } from "./drawRoutes";
 

const App = () => {

  return (
    
      
      <Router>
        <GuardProvider loading={Loading}>
          <Switch>
            {drawRoutes(routes)}
          </Switch>
        </GuardProvider>
      </Router>
   
  );
}

export default App;

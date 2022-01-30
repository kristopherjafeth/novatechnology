import React from 'react';
import Home from './Home.js';
import Login from './pages/Login.js';
import Dashboard from './pages/Dashboard.js';
import { Route, Switch } from 'react-router-dom';

const App = () =>{
  return <>
                    
                   
              <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route  exact path="/ingresar" component={Login}></Route>
              <Route  exact path="/dashboard" component={Dashboard}></Route>
              </Switch>
           
            
  
  </>;
}

export default App;


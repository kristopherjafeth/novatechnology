import React from 'react';
import Home from './Home.js';
import Login from './pages/Login.js';
import Dashboard from './pages/Dashboard.js';
import Paginasweb from './pages/paginasweb.js';
import Tiendasonline from './pages/tiendasonline.js';
import Hosting from './pages/Hosting.js';
import { Route, Switch} from 'react-router-dom';

const App = () =>{



  return <>
                    
                   
              <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route  exact path="/ingresar" component={Login}></Route>
              <Route  exact path="/dashboard" component={Dashboard}></Route>
              <Route exact path="/paginasweb" component={Paginasweb}></Route>
              <Route exact path="/tiendasonline" component={Tiendasonline}></Route>
              <Route exact path="/hosting" component={Hosting}></Route>

              </Switch>
           
            
  
  </>;
}

export default App;


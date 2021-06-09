import React from 'react';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import './App.scss';
import UsersTable from '../UsersTable';
import Login from '../Login';
import SingUp from '../SingUp';


function App() {
    return (
      <Router>            
          <Switch>
                <Route path='/login'>
                    <Login />
                </Route>                    
              <Route path='/singup'>
                  <SingUp />
              </Route>
                <Route path='/'>                    
                    <UsersTable />
              </Route>
          </Switch>       
      </Router>
      
  );
}

export default App;

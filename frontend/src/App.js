import React, { useState, useCallback} from 'react';

import { BrowserRouter as Router, Route,Redirect, Switch } from 'react-router-dom';
import Users from './users/pages/Users';
import Vitals from './users/pages/vitals';
import Profile from './users/pages/profile';
import Signup from './users/pages/Signup';
import Login from './users/pages/Login';
import {Hello} from './users/pages/prescriptiondisplay';
import MainNavigation from './shared/components/navigation/MainNavigation';
import { AuthContext } from './shared/util/AuthContext';


function App() {
const [isLoggedIn, setIsLoggedIn] = useState (false);


const login = useCallback (()=> {
  setIsLoggedIn (true);
 
},[]);

const logout = useCallback (()=> {
  setIsLoggedIn (false);

},[]);


let routes;
if (isLoggedIn) {
  routes = (
    <Switch>
    <Route path="/" exact>
      <Profile />
    </Route>
    <Route path="/vitals" exact>
      <Vitals />
    </Route>
 
    <Route path="/signup" exact>
      <Signup />
    </Route>
    <Route path="/prescriptions" exact>
      <Hello />
    </Route>
    <Redirect to="/" />

  </Switch>
  );
}
else{
  routes =(
    <Switch>
    <Route path="/" exact>
      <Profile />
    </Route>
    <Route path="/login" exact>
      <Login />
    </Route>
    <Route path="/signup" exact>
      <Signup />
    </Route>
    <Route path="/prescriptions" exact>
      <Hello />
    </Route>

   <Redirect to="/" />
   </Switch>
  );
}


  return (
    <AuthContext.Provider 
    value= {{ isLoggedIn:isLoggedIn, login : login , logout : logout}}
    >
    <Router>
    <MainNavigation />
    <main>
    {routes}
    </main>
  </Router>
  </AuthContext.Provider>
  );
}

export default App;

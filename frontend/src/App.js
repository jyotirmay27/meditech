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
import { DocContext } from './shared/util/DocContext';
import InputingPers from './doctors/addprescription';


function App() {
const [isLoggedIn, setIsLoggedIn] = useState (false);
const [userId, setUserId] = useState (false);

const login = useCallback (uid=> {
  setIsLoggedIn (true);
  setUserId(uid);
},[]);

const logout = useCallback (()=> {
  setIsLoggedIn (false);
  setUserId(null);
},[]);


let routes;
if (isLoggedIn) {
  routes = (
    <Switch>
    <Route path="/home" exact>
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
    <Redirect to="/home" />

  </Switch>
  );
}
else{
  routes =(
    <Switch>
    <Route path="/login" exact>
      <Profile />
    </Route>
    <Route path="/signup" exact>
      <Signup />
    </Route>

   <Redirect to="/login" />
   </Switch>
  );
}


  return (
    <AuthContext.Provider 
    value= {{ isLoggedIn:isLoggedIn, userId: userId, login : login , logout : logout}}
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

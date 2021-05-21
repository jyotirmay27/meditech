import React, { useState, useCallback,useEffect} from 'react';

import { BrowserRouter as Router, Route,Redirect, Switch } from 'react-router-dom';
import Users from './users/pages/Users';
import Vitals from './users/pages/vitals';
import Profile from './users/pages/profile';
import DocProfile from'./doctors/DocProfile';
import Signup from './users/pages/Signup';
import Login from './users/pages/Login';
import Allergy from './users/pages/addAllergy';
import DoctorSignup from './doctors/DoctorSignup';
import DoctorLogin from './doctors/DoctorLogin';
import {Hello} from './users/pages/prescriptiondisplay';
import MainNavigation from './shared/components/navigation/MainNavigation';
import { AuthContext } from './shared/util/AuthContext';
import { DocContext } from './shared/util/DocContext';
import InputingPers from './doctors/addprescription';
import Doctors from './users/pages/DoctorList';
import PatientVitals from './doctors/userVitals';
import {Footer} from './Footer';
import {FrontPage} from './FrontPage';
import PatientAllergy from './doctors/userAllergy';
import Appointment from './users/pages/Appointment';
let logoutTimer;

function App() {
  const [token, setToken] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
const [userId, setUserId] = useState (false);
const [isDoctor, setIsDoctor]=useState (false);

const login = useCallback ((uid, token,expirationDate)=> {
  setToken (token);
  setUserId(uid);
  const tokenExpirationDate =
  expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
  setTokenExpirationDate(tokenExpirationDate);
  localStorage.setItem(
  'userData',
  JSON.stringify({
    userId: uid,
    token: token,
    expiration: tokenExpirationDate.toISOString()
  })
);
}, []);


const logout = useCallback (()=> {
  setToken (null);
  setTokenExpirationDate(null);
  setUserId(null);
  localStorage.removeItem('userData');
},[]);

useEffect(() => {
  const storedData = JSON.parse(localStorage.getItem('userData'));
  if (
    storedData &&
    storedData.token &&
    new Date(storedData.expiration) > new Date()
  ) {
    login(storedData.userId, storedData.token, new Date(storedData.expiration));
  }
}, [login]);

const doctorlogin = useCallback ((uid, token,expirationDate)=> {
  setToken (token);
  setIsDoctor (true);
  setUserId(uid);
  const tokenExpirationDate =
  expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
  setTokenExpirationDate(tokenExpirationDate);
  localStorage.setItem(
  'docData',
  JSON.stringify({
    userId: uid,
    token: token,
    expiration: tokenExpirationDate.toISOString()
  })
);
}, []);

const doctorlogout = useCallback (()=> {
  setToken (null);
  setIsDoctor (false);
  setTokenExpirationDate(null);
  setUserId(null);
  localStorage.removeItem('docData');
},[]);

useEffect(() => {
  const storedData = JSON.parse(localStorage.getItem('docData'));
  if (
    storedData &&
    storedData.token &&
    new Date(storedData.expiration) > new Date()
  ) {
    doctorlogin(storedData.userId, storedData.token, new Date(storedData.expiration));
  }
}, [doctorlogin]);

// TO DO PARTICULAR PATIENT
// DOC PROFILE
// TO DO Photo upload
let routes;

if(isDoctor){
  if (token) {
    routes = (
      <Switch>
      <Route path="/home" exact>
        <DocProfile />
      </Route>
      <Route path="/addprescription" exact>
        <InputingPers />
      </Route>
      <Route path="/prescriptions/:presID" exact>
      <Hello />
    </Route>
    <Route path="/patients/:patID" exact>
      <PatientVitals />
    </Route>
    <Route path="/allergy/:patID" exact>
      <PatientAllergy />
    </Route>
      <Redirect to="/home" />
  
    </Switch>
    );
  }
  else{
    routes =(
      <Switch>
          <Route path="/" exact>
        <FrontPage />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/doctor/signup" exact>
        <DoctorSignup />
      </Route>
      <Route path="/doctor/login" exact>
        <DoctorLogin />
      </Route>
     <Redirect to="/" />
     </Switch>
    );
  }
}
else{
if (token) {
  routes = (
    <Switch>
    <Route path="/home" exact>
    <Profile  />
    </Route>
    <Route path="/vitals" exact>
      <Vitals />
    </Route>
    <Route path="/prescriptions/:presID" exact>
      <Hello />
    </Route>
    <Route path="/medication/:medID" exact>
      <Hello />
    </Route>
    <Route path="/doctors" exact>
      <Doctors />
    </Route>
    <Route path="/allergy" exact>
      <Allergy />
    </Route>
    <Route path="/appointment/:docID" exact>
      <Appointment />
    </Route>
    <Redirect to="/home" />

  </Switch>
  );
}
else{
  routes =(
    <Switch>
      <Route path="/" exact>
        <FrontPage />
      </Route>
    <Route path="/login" exact>
    <Login />
    </Route>
    <Route path="/signup" exact>
      <Signup />
    </Route>
    <Route path="/doctor/login" exact>
        <DoctorLogin />
      </Route>
      <Route path="/doctor/signup" exact>
        <DoctorSignup />
      </Route>
   <Redirect to="/" />
   </Switch>
  );
}
}


  return (
    <AuthContext.Provider 
    value= {{ isLoggedIn: !!token, token: token, userId: userId, isDoctor: isDoctor,
       doctorlogin:doctorlogin,doctorlogout:doctorlogout ,login : login , logout : logout}}
    >
    <Router>
    <MainNavigation />
    <main style={{minHeight: "90vh"}}>
    {routes}
    </main>
  <Footer />
  </Router>
  </AuthContext.Provider>
  );
}

export default App;

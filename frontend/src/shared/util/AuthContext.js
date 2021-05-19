import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  userId:null,
  token:null,
  isDoctor:false,
  login: () => {},
  logout: () => {},
  doctorlogin:()=>{},
  doctorlogout:()=>{}
});

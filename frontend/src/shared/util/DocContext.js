import { createContext } from 'react';

export const DocContext = createContext({
  isLoggedIn: false,
  docId:null,
  login: () => {},
  logout: () => {}
});